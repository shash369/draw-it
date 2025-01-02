"use client"
import { Button } from '@/components/ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

function dashboard() {
  return (
    <div>
      dashboard
      <Button>
        <LogoutLink>
                LogOut
        </LogoutLink>
      </Button>

    </div>
  )
}

export default dashboard