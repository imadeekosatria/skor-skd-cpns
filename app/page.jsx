'use client'
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { badgeVariants } from "@/components/ui/badge"
import { TopNav } from "@/components/nav";
import { useContext } from "react";
import { userContext } from "./contexProvider";



export default function Home() {
  const {user, setUser} = useContext(userContext)
  return (
    <main className="min-h-screen flex flex-col">
      <TopNav/>
      <Card className="flex flex-col mx-auto w-full lg:w-4/6 lg:mt-4">
        <CardHeader>
          <CardTitle>Peringkat Nasional SKD Sekolah Kedinasan</CardTitle>
          <CardDescription>Institut Pemerintahan Dalam Negeri (IPDN)</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption className="text-center">Perolehan Peringkat Nasional Sementara</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="max-md:px-2">No</TableHead>
                <TableHead className="text-center max-md:px-2">Nomor Peserta</TableHead>
                <TableHead className="max-md:hidden ">Nama</TableHead>
                <TableHead >TWK</TableHead>
                <TableHead className="text-center">TIU</TableHead>
                <TableHead className="text-center">TKP</TableHead>
                <TableHead className="text-center">Total</TableHead>
                <TableHead className="text-center whitespace-nowrap">Passing Grade</TableHead>
                <TableHead>Youtube</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="max-md:px-2">1</TableCell>
                <TableCell className="max-md:px-2">S2430010120007752</TableCell>
                <TableCell className="max-md:hidden capitalize">Tari Nur Hikmah</TableCell>
                <TableCell className="text-center">85</TableCell>
                <TableCell className="text-center">105</TableCell>
                <TableCell className="text-center">183</TableCell>
                <TableCell className="text-center">373</TableCell>
                <TableCell className="text-center"><span className="bg-green-500 rounded-full px-2.5 py-0.5 text-white font-semibold text-xs">Lulus</span></TableCell>
                <TableCell className="text-left"><Link href="#" passHref legacyBehavior className={badgeVariants({variant: "destructive"})}><a target="_blank" rel="noopener noreferrer">UPT BKN Mataram</a></Link></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="max-md:px-2">2</TableCell>
                <TableCell className="max-md:px-2">S2430010120007752</TableCell>
                <TableCell className="max-md:hidden capitalize max-w-12 whitespace-nowrap text-ellipsis overflow-hidden">Tari Nur Hikmah ddddd</TableCell>
                <TableCell className="text-center">60</TableCell>
                <TableCell className="text-center">105</TableCell>
                <TableCell className="text-center">183</TableCell>
                <TableCell className="text-center">373</TableCell>
                <TableCell className="text-center"><span className="bg-red-500 rounded-full px-2.5 py-0.5 text-white font-semibold text-xs whitespace-nowrap">Tidak Lulus</span></TableCell>
                <TableCell className="text-left"><Link href="#" passHref legacyBehavior className={badgeVariants({variant: "destructive"})}><a target="_blank" rel="noopener noreferrer">UPT BKN Mataram</a></Link></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
}
