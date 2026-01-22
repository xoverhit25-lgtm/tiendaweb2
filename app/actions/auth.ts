"use server"

import { cookies } from "next/headers"
import { randomBytes } from "crypto"

declare global {
  var adminTokens: { [key: string]: { email: string; expiresAt: number } } | undefined
}

// Simple credentials for demo (in production, use Supabase Auth or proper auth system)
// Change these credentials to your desired admin credentials
const ADMIN_EMAIL = "admin@example.com"
const ADMIN_PASSWORD = "admin123" // Change this to a secure password

interface LoginResult {
  success: boolean
  error?: string
  token?: string
}

export async function login(email: string, password: string): Promise<LoginResult> {
  try {
    // Validate credentials
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return {
        success: false,
        error: "Email o contraseña incorrectos",
      }
    }

    // Create a session token (in production, use proper session management)
    const token = randomBytes(32).toString("hex")
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    // Set secure cookie
    const cookieStore = await cookies()
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: expiresAt,
    })

    // Store token in memory (for simple demo - in production use proper session storage)
    // This is a simple approach; for production, store in database or Redis
    global.adminTokens = global.adminTokens || {}
    global.adminTokens[token] = {
      email,
      expiresAt: expiresAt.getTime(),
    }

    return {
      success: true,
      token,
    }
  } catch (error) {
    console.error("Login error:", error)
    return {
      success: false,
      error: "Error al procesar la solicitud",
    }
  }
}

export async function logout(): Promise<void> {
  try {
    const cookieStore = await cookies()
    cookieStore.delete("admin_token")
  } catch (error) {
    console.error("Logout error:", error)
  }
}

export async function verifyAdminToken(): Promise<boolean> {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin_token")?.value

    if (!token) {
      return false
    }

    // Check if token exists and hasn't expired
    if (global.adminTokens && global.adminTokens[token]) {
      const tokenData = global.adminTokens[token]
      if (tokenData.expiresAt > Date.now()) {
        return true
      } else {
        // Token expired, delete it
        delete global.adminTokens[token]
      }
    }

    return false
  } catch (error) {
    console.error("Token verification error:", error)
    return false
  }
}

export async function getAdminUser() {
  try {
    const cookieStore = await cookies()
    const token = cookieStore.get("admin_token")?.value

    if (!token || !global.adminTokens || !global.adminTokens[token]) {
      return null
    }

    const tokenData = global.adminTokens[token]
    if (tokenData.expiresAt > Date.now()) {
      return {
        email: tokenData.email,
      }
    }

    return null
  } catch (error) {
    console.error("Get admin user error:", error)
    return null
  }
}
