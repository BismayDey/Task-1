"use client"

import { useState } from "react"
import { Download, FileText, FileSpreadsheet, ImageIcon, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/hooks/use-toast"

interface DataExportCenterProps {
  onExport: (format: string) => void
}

export function DataExportCenter({ onExport }: DataExportCenterProps) {
  const [isExporting, setIsExporting] = useState(false)
  const { toast } = useToast()

  const handleExport = async (format: string, label: string) => {
    setIsExporting(true)
    toast({
      title: `Exporting ${label}...`,
      description: "Your report is being generated",
    })

    // Simulate export process
    setTimeout(() => {
      setIsExporting(false)
      onExport(format)
      toast({
        title: "Export completed",
        description: `Your ${label} report has been downloaded`,
      })
    }, 2000)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" disabled={isExporting} className="bg-transparent">
          <Download className="mr-2 h-4 w-4" />
          {isExporting ? "Exporting..." : "Export"}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="flex items-center justify-between">
          Export Data
          <Badge variant="secondary" className="text-xs">
            Premium
          </Badge>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => handleExport("pdf", "PDF")} className="cursor-pointer">
          <FileText className="mr-2 h-4 w-4 text-red-500" />
          <div className="flex-1">
            <div className="font-medium">PDF Report</div>
            <div className="text-xs text-muted-foreground">Complete analytics report</div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleExport("excel", "Excel")} className="cursor-pointer">
          <FileSpreadsheet className="mr-2 h-4 w-4 text-green-500" />
          <div className="flex-1">
            <div className="font-medium">Excel Spreadsheet</div>
            <div className="text-xs text-muted-foreground">Raw data with formulas</div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleExport("csv", "CSV")} className="cursor-pointer">
          <FileSpreadsheet className="mr-2 h-4 w-4 text-blue-500" />
          <div className="flex-1">
            <div className="font-medium">CSV Data</div>
            <div className="text-xs text-muted-foreground">Comma-separated values</div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => handleExport("png", "PNG")} className="cursor-pointer">
          <ImageIcon className="mr-2 h-4 w-4 text-purple-500" />
          <div className="flex-1">
            <div className="font-medium">Dashboard Screenshot</div>
            <div className="text-xs text-muted-foreground">High-resolution image</div>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => handleExport("scheduled", "Scheduled")} className="cursor-pointer">
          <Calendar className="mr-2 h-4 w-4 text-orange-500" />
          <div className="flex-1">
            <div className="font-medium">Schedule Export</div>
            <div className="text-xs text-muted-foreground">Automated reports</div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
