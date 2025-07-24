'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Button } from '@/components/ui/button'

const sections = [
    {
        id: 'presentation',
        title: 'PayUnit Checkout',
        subtitle: 'Solution de Paiement Moderne',
        description: 'Optimisez votre processus de paiement avec PayUnit Checkout. Notre solution vous permet de créer un formulaire de paiement sur mesure, garantissant une expérience utilisateur fluide et sécurisée.',
        image: '/images/image body 1.png',
        features: null
    },
    {
        id: 'payment-methods',
        title: 'Méthodes de Paiement Acceptées',
        subtitle: 'Diversifiez vos options',
        description: 'Nous acceptons une large gamme de méthodes de paiement pour répondre aux besoins de votre clientèle.',
        image: '/images/image body 2.png',
        features: [
            {
                title: 'Cartes de Crédit et de Débit',
                description: 'Acceptez les principales cartes telles que Visa, MasterCard et American Express.'
            },
            {
                title: 'Portefeuilles Numériques',
                description: 'Intégrez des solutions comme Apple Pay, Google Pay, et PayPal pour plus de commodité.'
            },
            {
                title: 'Paiements Mobiles',
                description: 'Offrez la possibilité de payer via des applications mobiles sécurisées.'
            }
        ]
    },
    {
        id: 'security',
        title: 'Sécurité des Paiements',
        subtitle: 'Protection Maximale',
        description: 'Nous mettons en œuvre des normes de sécurité rigoureuses pour le stockage des informations de paiement, assurant ainsi une protection maximale contre les violations de données.',
        image: '/images/image body 3.png',
        features: [
            {
                title: 'Cryptage Avancé',
                description: 'Toutes les transactions sont sécurisées par des protocoles de cryptage de pointe.'
            },
            {
                title: 'Conformité aux Normes',
                description: 'Respectez les réglementations en matière de sécurité des données (PCI DSS).'
            }
        ]
    },
    {
        id: 'integration',
        title: 'Intégration Facile',
        subtitle: 'Connexion Simplifiée',
        description: 'Grâce à notre architecture flexible, connectez-vous aisément à vos partenaires et prestataires de services. Le partage de données est optimisé pour garantir une intégration sans faille.',
        image: '/images/image hero.png',
        features: null
    },
    {
        id: 'fraud-prevention',
        title: 'Prévention de la Fraude',
        subtitle: 'Gestion des Risques',
        description: 'Nous proposons des outils avancés pour prévenir les transactions frauduleuses, assurant ainsi la sécurité de votre entreprise et de vos clients.',
        image: '/images/image body 1.png',
        features: [
            {
                title: 'Surveillance en Temps Réel',
                description: 'Évaluez les transactions à l\'aide d\'algorithmes de détection de fraude.'
            },
            {
                title: 'Gestion Efficace des Risques',
                description: 'Rationalisez vos opérations tout en maintenant un haut niveau de sécurité.'
            }
        ]
    }
]

export default function CheckoutPage() {
    const [activeSection, setActiveSection] = useState('')
    const bannerRef = useRef<HTMLDivElement>(null)
    const sectionsRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: bannerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionsRef.current) return

            const sections = sectionsRef.current.querySelectorAll('[data-section-id]')
            const scrollPosition = window.scrollY
            const bannerHeight = bannerRef.current?.offsetHeight || 0
            const windowHeight = window.innerHeight
            const ctaSection = document.querySelector('section.cta-section')
            const ctaTop = ctaSection?.getBoundingClientRect().top || 0
            const absoluteCtaTop = ctaTop + window.scrollY

            // Si on est encore dans la bannière, ne montrer aucune image de section
            if (scrollPosition < bannerHeight - windowHeight / 2) {
                setActiveSection('')
                return
            }

            // Si on a atteint le CTA, masquer toutes les images
            // On utilise un offset plus petit pour permettre à l'image de rester visible plus longtemps
            if (scrollPosition + windowHeight > absoluteCtaTop + 100) {
                setActiveSection('')
                return
            }

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop + bannerHeight
                const sectionHeight = (section as HTMLElement).offsetHeight
                const sectionBottom = sectionTop + sectionHeight

                if (scrollPosition >= sectionTop - windowHeight / 2 &&
                    scrollPosition < sectionBottom - windowHeight / 2) {
                    setActiveSection(section.getAttribute('data-section-id') || '')
                }
            })
        }

        window.addEventListener('scroll', handleScroll)
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="bg-gradient-to-b from-[#00897B]/5 to-white">

            {/* Banner section */}
            <section ref={bannerRef} className="relative min-h-[70vh] overflow-hidden bg-white isolate">
                <Navbar />
                {/* White background to ensure opacity */}
                <div className="absolute inset-0 bg-white z-0" />
                {/* Diagonal Line */}
                <div className="absolute inset-0 overflow-hidden z-1">
                    <div
                        className="absolute w-[200%] h-32 bg-gradient-to-r from-teal-500/10 via-teal-500 to-teal-500/10 transform -rotate-[30deg] translate-y-[60vh] -translate-x-1/4"
                        style={{
                            filter: 'blur(1px)',
                        }}
                    />
                </div>

                {/* Content Container */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
                    <div className="grid lg:grid-cols-2 gap-12 items-center pb-36 lg:pt-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-10"
                        >
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 border border-teal-100">
                                    <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                                    <span className="text-sm font-medium text-teal-700">PayUnit Checkout</span>
                                </div>
                                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] tracking-tight">
                                    Simplifiez vos{' '}
                                    <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                        paiements
                                    </span>{' '}
                                    en ligne
                                </h1>
                                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                                    Une solution de paiement moderne, sécurisée et adaptée à vos besoins. 
                                    <span className="text-teal-600 font-medium">Intégrez PayUnit Checkout en quelques minutes.</span>
                                </p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <Button 
                                    size="lg" 
                                    className="bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 text-lg px-8 py-6 hover:scale-105 hover:shadow-lg"
                                >
                                    Commencer maintenant
                                </Button>
                                <Button 
                                    size="lg" 
                                    variant="outline" 
                                    className="border-2 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full transition-all duration-300 text-lg px-8 py-6 hover:border-teal-200"
                                >
                                    Voir la documentation
                                </Button>
                            </div>
                            
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[800px] lg:h-[500px] hidden lg:flex items-center justify-center"
                            style={{ zIndex: 20 }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-teal-50/30 via-transparent to-transparent rounded-3xl" />
                            <Image
                                src="/images/image hero.png"
                                alt="PayUnit Checkout Banner"
                                fill
                                className="object-contain p-8"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            {/* Floating Elements */}
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

            {/* Sections Container */}
            <div className="relative">
                {/* Fixed Image Container */}
                <div className="hidden lg:block fixed top-1/2 right-0 w-1/2 h-screen -translate-y-1/2 pointer-events-none"
                     style={{ 
                         zIndex: activeSection ? 10 : -1,
                         visibility: activeSection ? 'visible' : 'hidden'
                     }}>
                    {sections.map((section) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ 
                                opacity: activeSection === section.id ? 1 : 0,
                                scale: activeSection === section.id ? 1 : 0.95
                            }}
                            transition={{ duration: 0.5 }}
                            className="absolute inset-0 flex items-center justify-center"
                            style={{ 
                                visibility: activeSection === section.id ? 'visible' : 'hidden',
                                display: activeSection === section.id ? 'flex' : 'none'
                            }}
                        >
                            <div className="relative w-full h-full max-w-2xl mx-auto p-8">
                                <Image
                                    src={section.image}
                                    alt={section.title}
                                    fill
                                    className="object-contain"
                                    priority={section.id === 'presentation'}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Scrollable Content */}
                <main ref={sectionsRef} className="relative">
                    {sections.map((section, index) => (
                        <section
                            key={section.id}
                            data-section-id={section.id}
                            className="relative min-h-screen py-24 lg:py-32 bg-white border-b border-gray-100"
                        >
                            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                                <div className="grid lg:grid-cols-2 gap-16 items-center">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false, margin: "-20%" }}
                                        transition={{ duration: 0.5 }}
                                        className="space-y-10"
                                    >
                                        <div className="space-y-6">
                                            {/* <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 border border-teal-100">
                                                <span className="w-2 h-2 rounded-full bg-teal-500 mr-2"></span>
                                                <span className="text-sm font-medium text-teal-700">Section {index + 1} - {section.subtitle}</span>
                                            </div> */}
                                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.2] tracking-tight">
                                                {section.title.split(' ').map((word, i) => (
                                                    <span key={i}>
                                                        {i === 1 ? (
                                                            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                                                {word}{' '}
                                                            </span>
                                                        ) : (
                                                            word + ' '
                                                        )}
                                                    </span>
                                                ))}
                                            </h2>
                                            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                                {section.description}
                                            </p>
                                        </div>

                                        {section.features && (
                                            <div className="grid gap-6 mt-8">
                                                {section.features.map((feature, featureIndex) => (
                                                    <motion.div
                                                        key={featureIndex}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: false }}
                                                        transition={{ delay: featureIndex * 0.2 }}
                                                        className="group bg-white hover:bg-teal-50/50 rounded-2xl p-8 shadow-sm border border-gray-100 hover:border-teal-100 transition-all duration-300"
                                                    >
                                                        <div className="flex items-start gap-4">
                                                            <div className="mt-1 w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center group-hover:bg-teal-200 transition-colors duration-300">
                                                                <span className="w-2 h-2 rounded-full bg-teal-500"></span>
                                                            </div>
                                                            <div className="space-y-2">
                                                                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                                                                    {feature.title}
                                                                </h3>
                                                                <p className="text-gray-600 leading-relaxed">
                                                                    {feature.description}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        )}

                                        
                                    </motion.div>

                                    {/* Mobile-only image */}
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: false, margin: "-20%" }}
                                        transition={{ duration: 0.5 }}
                                        className="relative h-[400px] lg:hidden"
                                    >
                                        <Image
                                            src={section.image}
                                            alt={section.title}
                                            fill
                                            className="object-contain"
                                            priority={index === 0}
                                            sizes="100vw"
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </section>
                    ))}
                </main>
            </div>

            {/* CTA Section */}
            <section className="relative py-24 cta-section overflow-hidden">
                {/* Background avec motif de points et dégradé */}
                <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-teal-50">
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
                            Transformez votre{' '}
                            <span className="bg-gradient-to-r from-teal-600 to-teal-500 bg-clip-text text-transparent">
                                expérience
                            </span>{' '}
                            de paiement
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Rejoignez les milliers d'entreprises qui font confiance à PayUnit Checkout pour leurs paiements en ligne.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button 
                                size="lg" 
                                className="bg-teal-600 hover:bg-teal-700 text-white rounded-full transition-all duration-300 text-lg px-8 py-6 hover:scale-105 hover:shadow-lg"
                            >
                                Commencer Maintenant
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="bg-white border-2 border-gray-200 text-gray-700 hover:bg-gray-50 rounded-full transition-all duration-300 text-lg px-8 py-6 hover:border-teal-200"
                            >
                                Contacter l'équipe commerciale
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