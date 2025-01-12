'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Pencil, Camera, Plus, ExternalLink } from 'lucide-react'
import Image from "next/image"
import { useUser } from "@auth0/nextjs-auth0/client"
import Loader from "@/components/Loader"

export default function ProfilePage() {

    const { user, isLoading } = useUser();

    if (isLoading) return <Loader />

    return (
        <div className="min-h-screen text-slate-100 bg-[#d8d7d7]">
            <div className="container mx-auto p-4 space-y-6">
                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Left Column - Main Profile */}
                    <div className="md:col-span-2 space-y-6">
                        {/* Profile Header Card */}
                        <Card className="bg-[#f5f5f5] border-slate-100">
                            <CardContent className="p-6">
                                <div className="relative">
                                    {/* Cover Image */}
                                    <div className="h-32 bg-gradient-to-r from-slate-400 to-slate-200 rounded-t-lg" />

                                    {/* Profile Image */}
                                    <div className="absolute -bottom-12 left-6">
                                        <div className="relative">
                                            <img
                                                src={user?.picture || undefined}
                                                alt="Profile"
                                                width={100}
                                                height={100}
                                                className="rounded-full border-4 border-slate-100"
                                            />
                                            <Button
                                                size="icon"
                                                variant="secondary"
                                                className="absolute bottom-0 right-0 rounded-full"
                                            >
                                                <Camera className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Edit Button */}
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="absolute top-4 right-4"
                                    >
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                </div>

                                {/* Profile Info */}
                                <div className="mt-16 space-y-4">
                                    <div className="flex items-center gap-3">
                                        <h1 className="text-2xl font-bold">{user && user.name}</h1>
                                        <Badge variant="secondary" className="bg-blue-500/10 text-blue-400 hover:bg-blue-500/20">
                                            Open to work
                                        </Badge>
                                    </div>
                                    <p className="text-slate-400">Student at Computer Arts and Technology</p>
                                    <p className="text-sm text-slate-500">Legaspi, Bicol Region, Philippines</p>

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-3 pt-4">
                                        <Button>Open to</Button>
                                        <Button variant="outline">
                                            Add profile section
                                            <Plus className="ml-2 h-4 w-4" />
                                        </Button>
                                        <Button variant="outline">More</Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Summary Card */}
                        <Card className="bg-slate-800 border-slate-700">
                            <CardHeader className="p-6">
                                <div className="flex items-start justify-between">
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-semibold">About</h2>
                                        <p className="text-sm text-slate-400">
                                            Write a summary to highlight your personality or work experience
                                        </p>
                                    </div>
                                    <Button variant="ghost" size="icon">
                                        <Plus className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardHeader>
                        </Card>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="space-y-6">
                        {/* Language Card */}
                        <Card className="bg-slate-800 border-slate-700">
                            <CardHeader className="p-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold">Profile language</h2>
                                    <Button variant="ghost" size="icon">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                </div>
                                <p className="text-sm text-slate-400">English</p>
                            </CardHeader>
                        </Card>

                        {/* Public Profile Card */}
                        <Card className="bg-slate-800 border-slate-700">
                            <CardHeader className="p-6">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold">Public profile & URL</h2>
                                    <Button variant="ghost" size="icon">
                                        <Pencil className="h-4 w-4" />
                                    </Button>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm text-blue-400 hover:text-blue-300 flex items-center gap-2"
                                >
                                    View public profile
                                    <ExternalLink className="h-4 w-4" />
                                </a>
                            </CardHeader>
                        </Card>

                        {/* People You May Know */}
                        <Card className="bg-slate-800 border-slate-700">
                            <CardHeader className="p-6">
                                <h2 className="text-lg font-semibold">People you may know</h2>
                                <p className="text-sm text-slate-400">From your industry</p>
                            </CardHeader>
                            <CardContent className="p-6 pt-0 space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="flex items-start gap-4">
                                        <Image
                                            src="/placeholder.svg"
                                            alt="Profile"
                                            width={48}
                                            height={48}
                                            className="rounded-full"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-medium truncate">Software Developer</h3>
                                            <p className="text-sm text-slate-400 truncate">Full Stack Engineer</p>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            Connect
                                        </Button>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}

