'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // TODO: Implement registration logic
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
                        Créez votre compte
                    </h1>
                    <p className="text-gray-600">
                        Rejoignez PayUnit et commencez à accepter des paiements
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
                        {/* Nom complet */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                    Prénom
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    required
                                    className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors duration-200 bg-gray-50/30 focus:bg-white"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                    Nom
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    required
                                    className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors duration-200 bg-gray-50/30 focus:bg-white"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Adresse email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors duration-200 bg-gray-50/30 focus:bg-white"
                                placeholder="exemple@email.com"
                            />
                        </div>

                        {/* Mot de passe */}
                        <div className="space-y-2">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Mot de passe
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                required
                                className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors duration-200 bg-gray-50/30 focus:bg-white"
                                placeholder="••••••••"
                            />
                            <p className="text-sm text-gray-500 mt-1">
                                Minimum 8 caractères
                            </p>
                        </div>

                        {/* Confirmation du mot de passe */}
                        <div className="space-y-2">
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                                Confirmez le mot de passe
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                required
                                className="block w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 transition-colors duration-200 bg-gray-50/30 focus:bg-white"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Conditions d'utilisation */}
                        <div className="space-y-4">
                            <label className="flex items-start">
                                <input
                                    type="checkbox"
                                    required
                                    className="mt-1 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
                                />
                                <span className="ml-2 text-sm text-gray-600">
                                    J'accepte les{' '}
                                    <Link href="/terms" className="text-teal-600 hover:text-teal-500">
                                        conditions d'utilisation
                                    </Link>
                                    {' '}et la{' '}
                                    <Link href="/privacy" className="text-teal-600 hover:text-teal-500">
                                        politique de confidentialité
                                    </Link>
                                </span>
                            </label>
                        </div>

                        {/* Bouton d'inscription */}
                        <Button
                            type="submit"
                            className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl transition-all duration-200 flex items-center justify-center"
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            ) : (
                                'Créer mon compte'
                            )}
                        </Button>
                    </form>
                </motion.div>

                {/* Lien de connexion */}
                <p className="text-center mt-8 text-gray-600">
                    Vous avez déjà un compte ?{' '}
                    <Link
                        href="/auth/login"
                        className="text-teal-600 hover:text-teal-500 font-medium"
                    >
                        Connectez-vous
                    </Link>
                </p>
            </div>
        </div>
    )
} 