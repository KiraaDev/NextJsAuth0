'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { CheckCircle, Briefcase, Users, Search } from 'lucide-react'
import Navbar from '@/components/Navbar';
import Loader from '@/components/Loader';

export default function AboutPage() {

    const { user, isLoading } = useUser();

    if (isLoading) return <Loader />

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-4xl font-bold text-center mb-8">About NextHire</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-lg text-muted-foreground">
                        NextHire is dedicated to revolutionizing the job search and hiring process. We connect talented individuals with their dream careers and help companies find the perfect candidates to drive their success.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>For Job Seekers</CardTitle>
                                <CardDescription>Find your next career opportunity</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-green-500" /> Create comprehensive profiles</li>
                                    <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-green-500" /> Search and filter job openings</li>
                                    <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-green-500" /> Easy application process</li>
                                    <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-green-500" /> Track application status</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>For Employers</CardTitle>
                                <CardDescription>Find your ideal candidates</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-green-500" /> Post detailed job listings</li>
                                    <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-green-500" /> Review and manage applications</li>
                                    <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-green-500" /> Streamlined recruitment process</li>
                                    <li className="flex items-center"><CheckCircle className="mr-2 h-5 w-5 text-green-500" /> Access to a wide talent pool</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Why Choose NextHire?</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="flex flex-col items-center text-center">
                            <Briefcase className="h-12 w-12 text-primary mb-2" />
                            <h3 className="text-xl font-semibold mb-2">Extensive Job Listings</h3>
                            <p className="text-muted-foreground">Access a wide range of job opportunities across various industries and locations.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Users className="h-12 w-12 text-primary mb-2" />
                            <h3 className="text-xl font-semibold mb-2">Talent Matching</h3>
                            <p className="text-muted-foreground">Our advanced algorithms help match the right candidates with the right jobs.</p>
                        </div>
                        <div className="flex flex-col items-center text-center">
                            <Search className="h-12 w-12 text-primary mb-2" />
                            <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                            <p className="text-muted-foreground">Intuitive interface for both job seekers and employers, making the hiring process smooth and efficient.</p>
                        </div>
                    </div>
                </section>

                {
                    !user &&
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
                        <div className="space-x-4">
                            <Button asChild>
                                <Link href="/api/auth/login">Sign In</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

