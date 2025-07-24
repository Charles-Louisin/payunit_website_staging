'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

// Liste des fonctionnalités
const features = [
    {
        title: "Facturation à la demande",
        description: "Payment Links est fourni avec l'intégration et vous permet d'accepter des paiements par carte bancaire et autres moyens.",
        pricing: "1,5 % + 0,25 €",
        subtext: "pour les cartes standard émises en Europe",
        link: "Informations sur les tarifs",
        additionalInfo: {
            title: "2,5 % + 0,25 €",
            description: "pour les cartes britanniques"
        }
    },
    {
        title: "Domaine personnalisé",
        description: "Utilisez votre propre domaine pour créer l'URL du lien de paiement. (Facultatif)",
        pricing: "10,00 $US",
        subtext: "par mois",
        link: "En savoir plus"
    },
    {
        title: "Factures post-paiement",
        description: "Vous pouvez générer une facture pour fournir à vos clients une preuve d'achat après une transaction ponctuelle. (Facultatif)",
        pricing: "0,4 %",
        subtext: "du montant total",
        link: "En savoir plus",
        additionalInfo: {
            title: "2,00 €",
            description: "max. par facture"
        }
    }
]

// Étapes de création
const steps = [
    {
        number: "01",
        title: "Créez votre lien",
        description: "Remplissez les détails de votre produit ou service en quelques clics."
    },
    {
        number: "02",
        title: "Partagez-le",
        description: "Envoyez le lien via SMS, e-mail ou messagerie instantanée."
    },
    {
        number: "03",
        title: "Recevez vos paiements",
        description: "Suivez vos transactions en temps réel dans votre tableau de bord."
    }
]

export default function PaymentLinkPage() {
    const bannerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: bannerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <>
            {/* Background fixe avec motif hexagonal */}
            <div className="fixed inset-0 w-full h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.343 0L13.857 8.485 15.272 9.9l7.9-7.9h-.83zm13.314 0L47.143 8.485 45.728 9.9l-7.9-7.9h-2.17zM32 0l8.485 8.485-1.414 1.414L30 .828 21.515 9.9l-1.414-1.414L28.586 0H32zm-4.343 0L35.8 8.485 34.385 9.9l-7.9-7.9h1.172zm-9.9 0L25.9 8.485 24.485 9.9l-7.9-7.9h1.172zm4.485 0L29.9 8.485 28.485 9.9l-7.9-7.9h2.828zm6.828 0L35.9 8.485 34.485 9.9l-7.9-7.9h2.828zm-16.485 0L23.9 8.485 22.485 9.9l-7.9-7.9h2.828zm-6.828 0L20.9 8.485 19.485 9.9l-7.9-7.9h2.828zm16.485 0L41.9 8.485 40.485 9.9l-7.9-7.9h2.828zm-6.828 0L32.9 8.485 31.485 9.9l-7.9-7.9h2.828zm-6.828 0L26.9 8.485 25.485 9.9l-7.9-7.9h2.828zM4.485 0L13.9 9.414l-1.414 1.414L0 0h4.485zm6.828 0L20.9 9.414l-1.414 1.414L6.9 0h4.485zm6.828 0L27.9 9.414l-1.414 1.414L13.9 0h4.485zm6.828 0L34.9 9.414l-1.414 1.414L20.9 0h4.485zm6.828 0L41.9 9.414l-1.414 1.414L27.9 0h4.485zm6.828 0L48.9 9.414l-1.414 1.414L34.9 0h4.485zm6.828 0L55.9 9.414l-1.414 1.414L41.9 0h4.485zm6.828 0L60 6.485 58.586 7.9l-7.9-7.9h4.485zM4.485 0L13.9 9.414l-1.414 1.414L0 0h4.485zm6.828 0L20.9 9.414l-1.414 1.414L6.9 0h4.485zm6.828 0L27.9 9.414l-1.414 1.414L13.9 0h4.485zM32 0l8.485 8.485-1.414 1.414L30 .828 21.515 9.9l-1.414-1.414L28.586 0H32zm-4.343 0L35.8 8.485 34.385 9.9l-7.9-7.9h1.172zm-9.9 0L25.9 8.485 24.485 9.9l-7.9-7.9h1.172zm4.485 0L29.9 8.485 28.485 9.9l-7.9-7.9h2.828zm6.828 0L35.9 8.485 34.485 9.9l-7.9-7.9h2.828zm-16.485 0L23.9 8.485 22.485 9.9l-7.9-7.9h2.828zm-6.828 0L20.9 8.485 19.485 9.9l-7.9-7.9h2.828z' fill='%2300897B' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }} />
            </div>

            {/* Contenu principal */}
            <div className="relative w-full">
                {/* Bannière Principale avec design unique */}
                <section ref={bannerRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-teal-50/50 to-transparent">
                    <Navbar />
                    
                    <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-8 lg:pt-0">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute -top-20 -left-20 w-40 h-40 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
                                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70" />
                                <div className="relative">
                                    <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-teal-800 text-sm font-medium mb-8">
                                        PayUnit Payment Links
                                    </span>
                                    <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                                        Vendez{' '}
                                        <span className="relative">
                                            <span className="relative z-10 text-teal-600">partout</span>
                                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 20" preserveAspectRatio="none">
                                                <path d="M0,10 Q50,0 100,10" stroke="#14B8A6" strokeWidth="4" fill="none"/>
                                            </svg>
                                        </span>{' '}
                                        sans limites
                                    </h1>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-10">
                                        Créez des liens de paiement personnalisés en quelques clics et partagez-les instantanément avec vos clients.
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button 
                                            size="lg"
                                            className="bg-teal-600 hover:bg-teal-700 text-white rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-teal-600/20"
                                        >
                                            Commencer maintenant
                                        </Button>
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="border-2 border-teal-200 text-teal-700 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300"
                                        >
                                            Voir la démo
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                className="relative hidden lg:block"
                            >
                                <div className="relative h-[600px]">
                                    <Image
                                        src="/images/paiement-illustration.png"
                                        alt="PayUnit Payment Links"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Section des fonctionnalités avec style pricing */}
                <section className="py-24 lg:py-32">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Nos solutions de paiement
                            </h2>
                            <p className="text-xl text-gray-600">
                                Choisissez la solution qui correspond le mieux à vos besoins
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex flex-col h-full">
                                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600 mb-6 flex-grow">
                                            {feature.description}
                                        </p>
                                        <div className="space-y-4">
                                            
                                            <Button
                                                variant="outline"
                                                className="w-full border-teal-200 text-teal-700 hover:bg-teal-50"
                                            >
                                                {feature.link}
                                            </Button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section des étapes avec design moderne */}
                <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-teal-50/30">
                    <div className="max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">
                                Comment ça marche ?
                            </h2>
                            <p className="text-xl text-gray-600">
                                Créez votre premier lien de paiement en quelques minutes
                            </p>
                        </div>

                        <div className="relative">
                            {/* Ligne de connexion */}
                            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-teal-100 -translate-y-1/2 hidden lg:block" />
                            
                            <div className="grid lg:grid-cols-3 gap-8">
                                {steps.map((step, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.2 }}
                                        className="relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                                    >
                                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                            {step.number}
                                        </div>
                                        <div className="pt-6 text-center">
                                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                                {step.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {step.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section CTA finale */}
                <section className="py-24 lg:py-32">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">
                        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-3xl p-12 text-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.4' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3Ccircle cx='13' cy='13' r='3'/%3E%3C/g%3E%3C/svg%3E")`,
                                    backgroundSize: '30px 30px'
                                }} />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative z-10 space-y-8"
                            >
                                <h2 className="text-4xl font-bold text-white mb-6">
                                    Prêt à développer votre activité ?
                                </h2>
                                <p className="text-xl text-teal-100">
                                    Rejoignez des milliers d'entreprises qui font confiance à PayUnit
                                </p>
                                <Button
                                    size="lg"
                                    className="bg-white text-teal-600 hover:bg-teal-50 rounded-full px-8 py-6 text-lg font-medium"
                                >
                                    Commencer gratuitement
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    )
} 