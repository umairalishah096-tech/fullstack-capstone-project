import React, { useState } from 'react';

function RegisterPage() {
    const handleRegister = async () => {
        const response = await fetch('/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: 'test', password: 'test' })
        });
    }
    return <div>Register</div>;
}
export default RegisterPage;
