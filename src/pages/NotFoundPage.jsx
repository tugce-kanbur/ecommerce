import React from 'react'

export default function NotFoundPage() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-red-600">404</h1>
            <p className="text-lg text-gray-600">Üzgünüz, aradığınız sayfa bulunamadı.</p>
        </div>
    );
}
