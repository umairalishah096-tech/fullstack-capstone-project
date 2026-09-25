import React, { useState } from 'react';

function LoginPage() {
    const handleLogin = async () => {
        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer <token>'
            },
            body: JSON.stringify({ email: 'test', password: 'test' })
        });
    }
    return <div>Login</div>;
}
export default LoginPage;
