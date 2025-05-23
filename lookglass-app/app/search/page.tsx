"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const SearchArticlePage = () => {
    const router = useRouter();
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [source, setSource] = useState("");
    const [searchText, setSearchText] = useState("");

    const handleSearchClick = () => {
        router.push('/visualisation');
    };

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-full max-w-4xl mx-auto px-4 py-8" style={{ margin: '100px' }}>
                <div className="flex flex-col items-center justify-center space-y-6">
                    <h1 className="text-3xl font-bold text-center">Search Article</h1>

                    <div className="w-full">
                        <Input
                            placeholder="Search here"
                            className="w-full text-lg p-6 h-12"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 w-full">
                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium">Start Date</label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start text-left">
                                        {startDate ? startDate.toDateString() : "Select start date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={startDate}
                                        onSelect={setStartDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label className="text-sm font-medium">End Date</label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="outline" className="w-full justify-start text-left">
                                        {endDate ? endDate.toDateString() : "Select end date"}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <Calendar
                                        mode="single"
                                        selected={endDate}
                                        onSelect={setEndDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    <div className="w-full">
                        <label className="text-sm font-medium block mb-2">Source</label>
                        <Select onValueChange={setSource} value={source}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select source" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="twitter">Twitter</SelectItem>
                                <SelectItem value="news">News Articles</SelectItem>
                                <SelectItem value="blogs">Blogs</SelectItem>
                                <SelectItem value="academic">Academic Papers</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Button className="w-48 mt-6" onClick={handleSearchClick}>Search</Button>
                </div>
            </div>
        </div>
    );
};

export default SearchArticlePage;