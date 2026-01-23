"use server"

import { cookies } from "next/headers"

declare global {
  var adminTokens: { [key: string]: { email: string; expiresAt: number } } | undefined
}

const ADMIN_EMAIL = "usaimport@admin.com"
const ADMIN_PASSWORD = "UsaImp0rt@2025$ecure!"

interface LoginResult {
  success: boolean
  error?: string
}

function generateToken(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export async function login(email: string, password: string): Promise<LoginResult> {
  try {
    if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
      return {
        success: false,
        error: "Email o contraseña incorrectos",
      }
    }

    const token = generateToken()
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000)

    const cookieStore = await cookies()
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      expires: expiresAt,
    })

    if (!global.adminTokens) {
      global.adminTokens = {}
    }
    
    global.adminTokens[token] = {
      email,
      expiresAt: expiresAt.getTime(),
    }

    return { success: true }
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

    if (global.adminTokens && global.adminTokens[token]) {
      const tokenData = global.adminTokens[token]
      if (tokenData.expiresAt > Date.now()) {
        return true
      } else {
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

    if (!token) return null

    if (!global.adminTokens || !global.adminTokens[token]) return null

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
