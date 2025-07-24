'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

// Liste des avantages
const benefits = [
    {
        icon: "⚡",
        title: "Gain de Temps",
        description: "Économisez des heures de travail en automatisant le processus de facturation."
    },
    {
        icon: "📊",
        title: "Suivi des Paiements",
        description: "Gardez un œil sur vos paiements en temps réel, où que vous soyez."
    },
    {
        icon: "🎯",
        title: "Facilité d'Utilisation",
        description: "Une interface intuitive pour créer et gérer vos factures sans effort."
    }
]

// Options de paiement
const paymentOptions = [
    {
        icon: "💰",
        title: "Paiement Unique",
        description: "Recevez le montant total en une seule fois."
    },
    {
        icon: "📅",
        title: "Paiement Échelonné",
        description: "Offrez à vos clients la possibilité de régler en plusieurs fois."
    },
    {
        icon: "⏱️",
        title: "Paiement au Rythme du Client",
        description: "Permettez des paiements adaptés à la situation financière de vos clients, avec des dates limites flexibles."
    }
]

export default function FacturePage() {
    const bannerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: bannerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <>
            {/* Background fixe */}
            <div className="fixed inset-0 w-full h-full">
                {/* Fond dégradé */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
                
                {/* Motif hexagonal */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='40' viewBox='0 0 24 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40c5.523 0 10-4.477 10-10V0c5.523 0 10 4.477 10 10v30h4V10C24 4.477 19.523 0 14 0v30c0 5.523-4.477 10-10 10' fill='%2300897B' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                        backgroundSize: '60px 60px'
                    }} />
                </div>

                {/* Cercles décoratifs */}
                <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
                <div className="absolute -bottom-32 left-10 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
            </div>

            {/* Contenu qui défile */}
            <div className="relative w-full">
                {/* Bannière Principale */}
                <section ref={bannerRef} className="relative min-h-[85vh] overflow-hidden">
                    <Navbar />
                    
                    {/* Contenu de la Bannière */}
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full">
                        <div className="grid lg:grid-cols-2 gap-12 items-center pt-8 lg:pt-0">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="space-y-10"
                            >
                                <div className="space-y-6">
                                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 border border-teal-100">
                                        <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                                        <span className="text-sm font-medium text-teal-700">PayUnit Facturation</span>
                                    </div>
                                    <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                                        Simplifiez votre{' '}
                                        <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                            facturation
                                        </span>{' '}
                                        avec PayUnit
                                    </h1>
                                    <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                                        Créez facilement des factures, recevez vos paiements et suivez-les où que vous soyez.
                                    </p>
                                </div>
                                
                                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                    <Button 
                                        size="lg" 
                                        className="group bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 text-lg px-8 py-6 hover:scale-105 hover:shadow-lg shadow-teal-600/20"
                                    >
                                        Commencez maintenant
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-0 h-5 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:opacity-100 group-hover:ml-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </Button>
                                    <Button 
                                        size="lg" 
                                        variant="outline" 
                                        className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full transition-all duration-300 text-lg px-8 py-6 hover:border-teal-200"
                                    >
                                        En savoir plus
                                    </Button>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative h-[600px] hidden lg:flex items-center justify-center"
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 via-transparent to-transparent rounded-3xl" />
                                <Image
                                    src="/images/invoice-illustration.png"
                                    alt="PayUnit Facturation"
                                    fill
                                    className="object-contain p-8"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Section Présentation de la Facturation */}
                <section className="relative py-24 lg:py-32">
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Colonne de gauche - Texte */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                className="space-y-8"
                            >
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 border border-teal-100">
                                    <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                                    <span className="text-sm font-medium text-teal-700">Facturation Intelligente</span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
                                    Gagnez du temps avec la{' '}
                                    <span className="relative">
                                        <span className="relative z-10 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                            facturation PayUnit
                                        </span>
                                        <span className="absolute -bottom-2 left-0 w-full h-3 bg-teal-50 -z-10 transform -skew-x-12"></span>
                                    </span>
                                </h2>

                                <p className="text-xl text-gray-600 leading-relaxed">
                                    La solution de facturation PayUnit vous permet de créer des factures en quelques minutes et d'être payé plus rapidement.
                                </p>

                                <div className="grid grid-cols-2 gap-6 pt-4">
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-teal-100/50 hover:border-teal-200 transition-all duration-300 group">
                                        <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">+45%</div>
                                        <div className="text-sm text-gray-600">Plus rapide que la facturation traditionnelle</div>
                                    </div>
                                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-teal-100/50 hover:border-teal-200 transition-all duration-300 group">
                                        <div className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">98%</div>
                                        <div className="text-sm text-gray-600">De nos clients recommandent PayUnit</div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Colonne de droite - SVG 3D animé */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: false }}
                                className="relative lg:h-[600px] hidden lg:block"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-transparent to-transparent rounded-3xl" />
                                <div className="relative h-full w-full flex items-center justify-center">
                                    <svg
                                        width="100%"
                                        height="100%"
                                        viewBox="0 0 500 500"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="transform rotate-6"
                                    >
                                        {/* Facture principale */}
                                        <motion.g
                                            initial={{ y: 20, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ duration: 1, delay: 0.2 }}
                                        >
                                            {/* Fond de la facture */}
                                            <rect x="50" y="50" width="400" height="500" rx="8" fill="white" filter="url(#shadow)" />
                                            <rect x="50" y="50" width="400" height="500" rx="8" stroke="#E2E8F0" strokeWidth="2" />

                                            {/* En-tête de la facture */}
                                            <rect x="80" y="80" width="120" height="40" rx="4" fill="#00897B" fillOpacity="0.1" />
                                            <text x="100" y="105" fill="#00897B" fontSize="16" fontWeight="600">FACTURE</text>

                                            {/* Lignes de la facture */}
                                            <motion.g
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ duration: 0.8, delay: 0.5 }}
                                                style={{ transformOrigin: '80px center' }}
                                            >
                                                <rect x="80" y="150" width="340" height="2" fill="#E2E8F0" />
                                                <rect x="80" y="200" width="340" height="1" fill="#E2E8F0" />
                                                <rect x="80" y="250" width="340" height="1" fill="#E2E8F0" />
                                                <rect x="80" y="300" width="340" height="1" fill="#E2E8F0" />
                                            </motion.g>

                                            {/* Éléments de texte animés */}
                                            <motion.g
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.6, delay: 0.8 }}
                                            >
                                                <text x="80" y="180" fill="#1A202C" fontSize="14">Description</text>
                                                <text x="300" y="180" fill="#1A202C" fontSize="14">Montant</text>
                                            </motion.g>

                                            {/* Lignes de contenu */}
                                            <motion.g
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.6, delay: 1 }}
                                            >
                                                <text x="80" y="230" fill="#4A5568" fontSize="14">Service 1</text>
                                                <text x="300" y="230" fill="#4A5568" fontSize="14">1,000 XAF</text>
                                                
                                                <text x="80" y="280" fill="#4A5568" fontSize="14">Service 2</text>
                                                <text x="300" y="280" fill="#4A5568" fontSize="14">2,500 XAF</text>
                                            </motion.g>

                                            {/* Total */}
                                            <motion.g
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, delay: 1.2 }}
                                            >
                                                <rect x="80" y="350" width="340" height="2" fill="#00897B" />
                                                <text x="80" y="380" fill="#1A202C" fontSize="16" fontWeight="600">Total</text>
                                                <text x="300" y="380" fill="#00897B" fontSize="16" fontWeight="600">3,500 XAF</text>
                                            </motion.g>

                                            {/* Logo PayUnit */}
                                            <motion.g
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ duration: 0.5, delay: 1.4 }}
                                                style={{ transformOrigin: '400px 80px' }}
                                            >
                                                <circle cx="400" cy="80" r="20" fill="#00897B" fillOpacity="0.1" />
                                                <text x="385" y="85" fill="#00897B" fontSize="12" fontWeight="600">PayUnit</text>
                                            </motion.g>
                                        </motion.g>

                                        {/* Effet d'ombre */}
                                        <defs>
                                            <filter id="shadow" x="0" y="0" width="500" height="600" filterUnits="userSpaceOnUse">
                                                <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1" />
                                            </filter>
                                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#00897B" stopOpacity="0.6" />
                                                <stop offset="100%" stopColor="#00897B" stopOpacity="0.2" />
                                            </linearGradient>
                                        </defs>
                                    </svg>

                                    {/* Éléments décoratifs */}
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                        }}
                                        className="absolute -right-4 top-1/4 w-24 h-24 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full opacity-80 blur-2xl"
                                    />
                                    <motion.div
                                        animate={{
                                            y: [0, 10, 0],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            repeatType: "reverse",
                                        }}
                                        className="absolute -left-4 bottom-1/4 w-32 h-32 bg-gradient-to-br from-teal-100 to-teal-50 rounded-full opacity-80 blur-2xl"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Section Options de Paiement */}
                <section className="relative py-24 lg:py-32">
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            {/* Colonne de gauche - Cards */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                className="flex-1 w-full space-y-6"
                            >
                                {paymentOptions.map((option, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group relative"
                                    >
                                        <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-0 group-hover:opacity-10 transition duration-1000 group-hover:duration-200" />
                                        <div className="relative flex items-start gap-4 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-teal-100/50 hover:border-teal-200 transition-all duration-300">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-50 flex items-center justify-center">
                                                <span className="text-2xl">{option.icon}</span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                                                    {option.title}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {option.description}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0 self-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <svg className="w-6 h-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Colonne de droite - Texte */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false }}
                                className="flex-1 space-y-8"
                            >
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 border border-teal-100">
                                    <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                                    <span className="text-sm font-medium text-teal-700">Options Flexibles</span>
                                </div>

                                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
                                    Choisissez votre{' '}
                                    <span className="relative">
                                        <span className="relative z-10 bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                            méthode
                                        </span>
                                        <span className="absolute -bottom-2 left-0 w-full h-3 bg-teal-50 -z-10 transform -skew-x-12"></span>
                                    </span>{' '}
                                    de paiement
                                </h2>

                                <p className="text-xl text-gray-600 leading-relaxed">
                                    Offrez à vos clients la flexibilité dont ils ont besoin avec nos différentes options de paiement adaptées à chaque situation.
                                </p>

                                <div className="flex items-center gap-4 pt-4">
                                    <Button 
                                        size="lg" 
                                        className="group bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 text-lg px-8 py-6 hover:scale-105"
                                    >
                                        Explorer les options
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-0 h-5 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:opacity-100 group-hover:ml-2"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                                            />
                                        </svg>
                                    </Button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Section Avantages */}
                <section className="relative py-24 lg:py-32">
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="text-center max-w-3xl mx-auto mb-20"
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                                Pourquoi choisir la{' '}
                                <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                    facturation PayUnit
                                </span>{' '}
                                ?
                            </h2>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                                    <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-4">
                                        <span className="text-4xl">{benefit.icon}</span>
                                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                                            {benefit.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {benefit.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section CTA */}
                <section className="relative py-24 lg:py-32">
                    <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            className="space-y-8"
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
                                Prêt à simplifier votre{' '}
                                <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                    facturation
                                </span>{' '}
                                ?
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed">
                                Rejoignez des milliers d'utilisateurs qui font confiance à PayUnit pour leurs besoins de facturation.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                <Button 
                                    size="lg" 
                                    className="group bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 text-lg px-8 py-6 hover:scale-105 hover:shadow-lg"
                                >
                                    Essayez-le dès aujourd'hui
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-0 h-5 opacity-0 transition-all duration-300 group-hover:w-5 group-hover:opacity-100 group-hover:ml-2"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Button>
                                <Button 
                                    size="lg" 
                                    variant="outline" 
                                    className="bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full transition-all duration-300 text-lg px-8 py-6 hover:border-teal-200"
                                >
                                    Contactez-nous
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
} 