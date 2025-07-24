'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

// Données des avantages
const benefits = [
    {
        icon: "💳",
        title: "Carte",
        description: "Acceptez les paiements par carte de crédit et de débit."
    },
    {
        icon: "📱",
        title: "Mobile",
        description: "Offrez la possibilité de payer via des solutions mobiles."
    },
    {
        icon: "💵",
        title: "Espèces",
        description: "Ne laissez pas les espèces de côté."
    },
    {
        icon: "🔄",
        title: "Autres Modes de Paiement",
        description: "Ajoutez facilement d'autres options selon vos besoins."
    }
]

// Données des caractéristiques
const features = [
    {
        icon: "😊",
        title: "Satisfaction Client",
        description: "Garantissez une expérience d'achat fluide."
    },
    {
        icon: "🔒",
        title: "Fiabilité",
        description: "Un système robuste qui assure des résultats fiables à chaque transaction."
    },
    {
        icon: "🌍",
        title: "Accessibilité",
        description: "Interface multilingue pour un usage international."
    }
]

export default function PDVPage() {
    const bannerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: bannerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <div className="bg-gradient-to-b from-[#00897B]/5 to-white">
            {/* Bannière Principale */}
            <section ref={bannerRef} className="relative min-h-[85vh] overflow-hidden bg-white isolate">
                <Navbar />
                
                {/* Motif de fond */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300897B' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: '30px 30px'
                    }} />
                </div>

                {/* Cercles décoratifs */}
                <div className="absolute top-20 left-10 w-64 h-64 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
                <div className="absolute -bottom-32 right-10 w-64 h-64 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
                <div className="absolute -top-32 left-1/2 w-64 h-64 bg-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />

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
                                    <span className="text-sm font-medium text-teal-700">PayUnit PDV</span>
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                                    Transformez chaque{' '}
                                    <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                        vente
                                    </span>{' '}
                                    en une expérience fluide
                                </h1>
                                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                                    Découvrez le PDV Payunit, conçu pour les entreprises de toutes tailles.
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button 
                                    size="lg" 
                                    className="group bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 text-lg px-8 py-6 hover:scale-105 hover:shadow-lg shadow-teal-600/20"
                                >
                                    Essayez-le maintenant
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
                            className="relative h-[800px] lg:h-[600px] hidden lg:flex items-center justify-center"
                            style={{ zIndex: 20 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 via-transparent to-transparent rounded-3xl" />
                            <Image
                                src="/images/image hero.png"
                                alt="PayUnit PDV Banner"
                                fill
                                className="object-contain p-8"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Éléments flottants */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                }}
                                className="absolute top-1/4 -left-8 w-16 h-16 bg-teal-50/80 rounded-2xl backdrop-blur-sm border border-teal-100/50"
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
                                className="absolute bottom-1/4 -right-4 w-20 h-20 bg-teal-50/80 rounded-full backdrop-blur-sm border border-teal-100/50"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section Présentation du Produit */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Un PDV{' '}
                            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                conçu pour vous
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Le PDV Payunit simplifie les transactions grâce à une interface multilingue conviviale, adaptée à vos besoins.
                        </p>
                    </motion.div>

                    {/* Grille des options de paiement */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ delay: index * 0.1 }}
                                className="group bg-white hover:bg-teal-50/50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-teal-100 transition-all duration-300"
                            >
                                <div className="space-y-4">
                                    <span className="text-4xl">{benefit.icon}</span>
                                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
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

            

            {/* Section Processus de Paiement */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                {/* Cercles décoratifs */}
                <div className="absolute top-40 left-0 w-72 h-72 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
                <div className="absolute bottom-40 right-0 w-72 h-72 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Notre{' '}
                            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                processus
                            </span>{' '}
                            de paiement
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Une expérience de paiement simple et intuitive en quelques étapes
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
                        {/* Étape 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                                        <span className="text-teal-600 font-semibold">1</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Ajout d'article</h3>
                                </div>
                                <p className="text-gray-600">Ajoutez facilement vos articles avec leurs détails</p>
                                <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                                    <Image
                                        src="/images/pdv/step1.png"
                                        alt="Ajout d'article"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Étape 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.2 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                                        <span className="text-teal-600 font-semibold">2</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Choix du paiement</h3>
                                </div>
                                <p className="text-gray-600">Sélectionnez votre méthode de paiement préférée</p>
                                <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                                    <Image
                                        src="/images/pdv/step2.png"
                                        alt="Sélection du mode de paiement"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Étape 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.3 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                                        <span className="text-teal-600 font-semibold">3</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Détails</h3>
                                </div>
                                <p className="text-gray-600">Renseignez les informations nécessaires</p>
                                <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                                    <Image
                                        src="/images/pdv/step3.png"
                                        alt="Ajout des détails"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Étape 4 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.4 }}
                            className="relative group"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                                        <span className="text-teal-600 font-semibold">4</span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">Confirmation</h3>
                                </div>
                                <p className="text-gray-600">Recevez votre reçu de transaction</p>
                                <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
                                    <Image
                                        src="/images/pdv/step4.png"
                                        alt="Confirmation de paiement"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    
                </div>
            </section>

            {/* Section Historique et Reçus */}
            <section className="py-24 lg:py-32 bg-gradient-to-br from-teal-50 via-white to-teal-50 relative overflow-hidden">
                {/* Motif de fond */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #00897B 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                    opacity: 0.1
                }} />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-center max-w-3xl mx-auto mb-20"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Historique et{' '}
                            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                reçus
                            </span>{' '}
                            de transactions
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Nous conservons et vous permettons de récupérer toutes vos transactions en un seul endroit, 
                            quel que soit le mode de paiement et vous pouvez générer et partager le reçu
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Colonne de gauche - Historique */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            className="relative"
                        >
                            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                                {/* En-tête de l'historique */}
                                <div className="bg-teal-600 p-4 flex items-center justify-between">
                                    <div className="flex items-center space-x-2 text-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                        </svg>
                                        <span className="font-medium">Transaction History</span>
                                    </div>
                                    <div className="bg-white/20 rounded-full p-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Liste des transactions */}
                                <div className="divide-y divide-gray-100">
                                    {[...Array(6)].map((_, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="p-4 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                                        >
                                            <div className="flex items-center space-x-4">
                                                <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-600" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                                <div>
                                                    <div className="text-sm font-medium text-gray-900">PAY{index}POST1717...</div>
                                                    <div className="text-xs text-gray-500">05 Jan, 2024</div>
                                                </div>
                                            </div>
                                            <div className="text-sm font-medium text-teal-600">XAF {1000 * (index + 1)}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            {/* Effet de profondeur */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur-xl opacity-10 transform translate-y-4 scale-95"></div>
                        </motion.div>

                        {/* Colonne de droite - Reçus */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false }}
                            className="space-y-8"
                        >
                            {/* Reçu de transaction réussie */}
                            <motion.div
                                initial={{ scale: 0.95 }}
                                whileInView={{ scale: 1 }}
                                className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-6"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="text-center mb-6">
                                    <div className="text-green-500 font-medium mb-2">Transaction Réussie</div>
                                    <div className="text-2xl font-bold text-gray-900">XAF 1,000</div>
                                </div>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">ID de Référence</span>
                                        <span className="text-gray-900 font-medium">ZCVXTPVGRQ</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Mode de Paiement</span>
                                        <span className="text-gray-900 font-medium">CASH</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Statut</span>
                                        <span className="text-green-500 font-medium">SUCCESS</span>
                                    </div>
                                </div>
                                <div className="flex gap-3">
                                    <button className="flex-1 bg-teal-600 text-white rounded-full py-2 px-4 hover:bg-teal-700 transition-colors duration-200">
                                        Partager le Reçu
                                    </button>
                                    <button className="flex-1 border border-gray-200 text-gray-600 rounded-full py-2 px-4 hover:bg-gray-50 transition-colors duration-200">
                                        Retour à l'Accueil
                                    </button>
                                </div>
                            </motion.div>

                            {/* Reçu PDF */}
                            <motion.div
                                initial={{ scale: 0.95 }}
                                whileInView={{ scale: 1 }}
                                className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 p-6"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-8 h-8">
                                        <Image
                                            src="/images/logo payunit.png"
                                            alt="PayUnit Logo"
                                            width={32}
                                            height={32}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs text-gray-500">Transaction Receipt</div>
                                        <div className="text-sm text-gray-900">02 Dec, 2024 - 13:39:33</div>
                                    </div>
                                </div>
                                <div className="space-y-4 mb-6">
                                    <div className="pb-4 border-b border-gray-100">
                                        <div className="text-sm text-gray-500 mb-1">Transaction Type</div>
                                        <div className="text-gray-900 font-medium">CASH</div>
                                    </div>
                                    <div className="pb-4 border-b border-gray-100">
                                        <div className="text-sm text-gray-500 mb-1">Reference ID</div>
                                        <div className="text-gray-900 font-medium">XPVWXN-ION</div>
                                    </div>
                                    <div className="pb-4">
                                        <div className="text-sm text-gray-500 mb-1">Total Amount</div>
                                        <div className="text-2xl font-bold text-gray-900">XAF 1,000</div>
                                    </div>
                                </div>
                                <div className="text-center text-xs text-gray-500">
                                    Thank you for using PayUnit
                                </div>
                            </motion.div>

                            {/* Effet de profondeur */}
                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur-xl opacity-10 transform translate-y-4 scale-95"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            

            {/* Section Rapports de Ventes */}
            <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
                {/* Motif de fond */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, #00897B 1px, transparent 0)`,
                    backgroundSize: '40px 40px',
                    opacity: 0.1
                }} />

                {/* Cercles décoratifs */}
                <div className="absolute top-40 left-0 w-72 h-72 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
                <div className="absolute bottom-40 right-0 w-72 h-72 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
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
                                <span className="text-sm font-medium text-teal-700">Rapports & Statistiques</span>
                            </div>

                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
                                Vos rapports de ventes{' '}
                                <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                    en un clic
                                </span>
                            </h2>

                            <p className="text-xl text-gray-600 leading-relaxed">
                                Accédez facilement à des rapports de ventes détaillés par mode de paiement. Prenez des décisions éclairées grâce à des données précises et en temps réel.
                            </p>

                            <div className="space-y-6">
                                {/* Statistiques */}
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-teal-100 transition-colors duration-300">
                                        <div className="text-3xl font-bold text-gray-900 mb-2">+25%</div>
                                        <div className="text-sm text-gray-600">Croissance des ventes</div>
                                    </div>
                                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-teal-100 transition-colors duration-300">
                                        <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
                                        <div className="text-sm text-gray-600">Taux de réussite</div>
                                    </div>
                                </div>

                                {/* Liste des fonctionnalités */}
                                <div className="space-y-4">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-gray-900 mb-1">Rapports hebdomadaires</h4>
                                            <p className="text-gray-600">Visualisez vos performances sur une base hebdomadaire</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0 mt-1">
                                            <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-medium text-gray-900 mb-1">Filtres avancés</h4>
                                            <p className="text-gray-600">Filtrez par mode de paiement et période</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Colonne de droite - Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false }}
                            className="relative lg:h-[600px]"
                        >
                            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 aspect-[9/16] lg:aspect-auto lg:h-full">
                                <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur opacity-10"></div>
                                <Image
                                    src="/images/pdv/receipts/counter.png"
                                    alt="Rapports de ventes"
                                    fill
                                    className="object-contain p-4"
                                />
                            </div>

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
                                className="absolute top-10 -right-6 w-12 h-12 bg-teal-50/80 rounded-full backdrop-blur-sm border border-teal-100/50"
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
                                className="absolute bottom-10 -left-6 w-16 h-16 bg-teal-50/80 rounded-lg backdrop-blur-sm border border-teal-100/50"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            

            {/* Section CTA */}
            <section className="relative py-24 overflow-hidden">
                {/* Fond avec motif de points et dégradé */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, #00897B 1px, transparent 0)`,
                        backgroundSize: '40px 40px',
                        opacity: 0.1
                    }} />
                </div>

                {/* Cercles décoratifs */}
                <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-br from-teal-200 to-teal-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />

                <div className="relative z-10 max-w-4xl mx-auto text-center px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
                            Prêt à améliorer votre{' '}
                            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                expérience
                            </span>{' '}
                            de vente ?
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Rejoignez des milliers d'entreprises qui utilisent Payunit pour simplifier leurs transactions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button 
                                size="lg" 
                                className="group bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 text-lg px-8 py-6 hover:scale-105 hover:shadow-lg"
                            >
                                Demandez une démonstration
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

                {/* Formes décoratives flottantes */}
                <motion.div
                    animate={{
                        y: [0, -10, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute top-1/4 left-10 w-16 h-16 bg-teal-50/80 rounded-2xl backdrop-blur-sm border border-teal-100/50 hidden lg:block"
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
                    className="absolute bottom-1/4 right-10 w-20 h-20 bg-teal-50/80 rounded-full backdrop-blur-sm border border-teal-100/50 hidden lg:block"
                />
            </section>

            <Footer />
        </div>
    )
} 