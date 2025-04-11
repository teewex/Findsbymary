"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

export type PortfolioItem = {
  id: string
  title: string
  description: string
  fullDescription?: string
  image: string
  category: string
  technologies?: string[]
  challenges?: string[]
  solutions?: string[]
  results?: string[]
}

interface PortfolioDetailModalProps {
  isOpen: boolean
  onClose: () => void
  item: PortfolioItem | null
}

export function PortfolioDetailModal({ isOpen, onClose, item }: PortfolioDetailModalProps) {
  if (!item) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold text-primary">{item.title}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription>{item.description}</DialogDescription>
        </DialogHeader>

        <div className="relative w-full h-64 my-4">
          <Image
            src={
              item.category === "executive" && item.id === "exec-1"
                ? "/images/executive-kpi-dashboard.png"
                : item.category === "executive" && item.id === "exec-2"
                  ? "/images/sales-analysis-dashboard.png"
                  : item.category === "executive" && item.id === "exec-3"
                    ? "/images/customer-attrition-dashboard.png"
                    : item.category === "financial" && item.id === "fin-1"
                      ? "/images/financial-performance-dashboard.png"
                      : item.category === "financial" && item.id === "fin-2"
                        ? "/images/revenue-analysis-dashboard.png"
                        : item.category === "financial" && item.id === "fin-3"
                          ? "/images/expense-management-dashboard.png"
                          : item.category === "mortgage" && item.id === "mort-1"
                            ? "/images/mortgage-pipeline-dashboard.png"
                            : item.category === "mortgage" && item.id === "mort-2"
                              ? "/images/mortgage-portfolio-performance.png"
                              : item.category === "mortgage" && item.id === "mort-3"
                                ? "/images/mortgage-market-analysis.png"
                                : item.category === "supply" && item.id === "supply-1"
                                  ? "/images/inventory-optimization-dashboard.png"
                                  : item.category === "supply" && item.id === "supply-2"
                                    ? "/images/operations-performance-dashboard.png"
                                    : item.category === "supply" && item.id === "supply-3"
                                      ? "/images/logistics-network-analysis.png"
                                      : item.image || "/placeholder.svg"
            }
            alt={item.title}
            fill
            className="object-cover rounded-md"
          />
        </div>

        <div className="space-y-4">
          {item.fullDescription && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Overview</h3>
              <p className="text-muted-foreground">{item.fullDescription}</p>
            </div>
          )}

          {item.technologies && item.technologies.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {item.challenges && item.challenges.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Challenges</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {item.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {item.solutions && item.solutions.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Solutions</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {item.solutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          )}

          {item.results && item.results.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold mb-2">Results</h3>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                {item.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <DialogFooter className="mt-6">
          <Button
            onClick={onClose}
            className="bg-primary hover:bg-primary/80 text-white transition-colors duration-300"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

