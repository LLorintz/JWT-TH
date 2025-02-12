import React, { useEffect } from 'react'
import { UseAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const requireAuth = (ComposedComponent: React.ComponentType<unknown>) => {
    return () => {

        const { isAuthenticated } = UseAuth()
        const navigate = useNavigate()

        useEffect(() => {
            if (!isAuthenticated) {
                navigate('/')
            }
        }, [isAuthenticated, navigate])

        if (!isAuthenticated) {
            return null
        }
        return <ComposedComponent/>

    }
}

export default requireAuth