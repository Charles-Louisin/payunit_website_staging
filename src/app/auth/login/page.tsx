'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // TODO: Implement login logic
        setTimeout(() => setIsLoading(false), 2000)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white flex flex-col items-center justify-center p-4">
            

            <div className="w-full max-w-md">
                {/* Logo centré */}
                <div className="mb-8 text-center">
                    <Link href="/" className="inline-block">
                        <Image
                            src="/images/logo payunit.png"
                            alt="PayUnit Logo"
                            width={150}
                            height={40}
                            className="mx-auto"
                        />
                    </Link>
                </div>

                {/* Titre et sous-titre */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Bon retour parmi nous !
                    </h1>
                    <p className="text-gray-600">
                        Connectez-vous pour accéder à votre compte
                    </p>
                </div>

                {/* Formulaire */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
                >
                    {/* Éléments décoratifs */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-50 rounded-full -ml-16 -mb-16" />

                    <form onSubmit={handleSubmit} className="relative space-y-6">
                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Adresse email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors duration-200 bg-gray-50/30 focus:bg-white"
                                    placeholder="exemple@email.com"
                                />
                            </div>
                        </div>

                        {/* Mot de passe */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Mot de passe
                            </label>
                            <div className="relative">
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    required
                                    className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors duration-200 bg-gray-50/30 focus:bg-white"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Options de connexion */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                />
                                <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
                            </label>
                            <Link
                                href="/auth/forgot-password"
                                className="text-sm text-teal-600 hover:text-teal-500"
                            >
                                Mot de passe oublié ?
                            </Link>
                        </div>

                        {/* Bouton de connexion */}
                        <Button
                            type="submit"
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl transition-all duration-200 flex items-center justify-center"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                'Se connecter'
                            )}
                        </Button>
                    </form>
                </motion.div>

                {/* Lien d'inscription */}
                <p className="text-center mt-8 text-gray-600">
                    Vous n'avez pas de compte ?{' '}
                    <Link
                        href="/auth/register"
                        className="text-teal-600 hover:text-teal-500 font-medium"
                    >
                        Inscrivez-vous
                    </Link>
                </p>
            </div>
        </div>
    )
} 