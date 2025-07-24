'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ForgotPasswordPage() {
    const [isLoading, setIsLoading] = useState(false)
    const [isEmailSent, setIsEmailSent] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        // TODO: Implement forgot password logic
        setTimeout(() => {
            setIsLoading(false)
            setIsEmailSent(true)
        }, 2000)
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
                        Mot de passe oublié ?
                    </h1>
                    <p className="text-gray-600">
                        Entrez votre adresse email pour réinitialiser votre mot de passe
                    </p>
                </div>

                {/* Formulaire ou message de confirmation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
                >
                    {/* Éléments décoratifs */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-teal-50 rounded-full -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-50 rounded-full -ml-16 -mb-16" />

                    {isEmailSent ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative text-center space-y-4"
                        >
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg 
                                    className="w-8 h-8 text-teal-600" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                    />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900">
                                Vérifiez votre boîte mail
                            </h3>
                            <p className="text-gray-600">
                                Nous vous avons envoyé un email contenant les instructions pour réinitialiser votre mot de passe.
                            </p>
                            <Button
                                onClick={() => setIsEmailSent(false)}
                                variant="outline"
                                className="mt-4 border-teal-200 text-teal-700 hover:bg-teal-50"
                            >
                                Renvoyer l'email
                            </Button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="relative space-y-6">
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

                            {/* Bouton d'envoi */}
                            <Button
                                type="submit"
                                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl transition-all duration-200 flex items-center justify-center"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    'Envoyer les instructions'
                                )}
                            </Button>
                        </form>
                    )}
                </motion.div>

                {/* Lien de retour */}
                <p className="text-center mt-8 text-gray-600">
                    Vous vous souvenez de votre mot de passe ?{' '}
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