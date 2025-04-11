"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

// Bar Chart Component
export function BarChart({ data, index, categories, colors = ["primary"], valueFormatter, className, ...props }) {
  const chartRef = useRef(null)
  const [chartHeight, setChartHeight] = useState(300)

  useEffect(() => {
    if (chartRef.current) {
      const maxValue = Math.max(...data.map((item) => Math.max(...categories.map((cat) => item[cat]))))
      const padding = 40
      const barWidth = 30
      const gap = 20
      const width = data.length * (barWidth + gap)

      // Clear previous content
      const svg = chartRef.current
      svg.innerHTML = ""

      // Set viewBox
      svg.setAttribute("viewBox", `0 0 ${width + padding * 2} ${chartHeight}`)

      // Draw axes
      const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
      axisLine.setAttribute("x1", padding)
      axisLine.setAttribute("y1", chartHeight - padding)
      axisLine.setAttribute("x2", width + padding)
      axisLine.setAttribute("y2", chartHeight - padding)
      axisLine.setAttribute("stroke", "#e2e8f0")
      axisLine.setAttribute("stroke-width", "2")
      svg.appendChild(axisLine)

      // Draw bars
      data.forEach((item, i) => {
        categories.forEach((category, catIndex) => {
          const value = item[category]
          const barHeight = (value / maxValue) * (chartHeight - padding * 2)

          const bar = document.createElementNS("http://www.w3.org/2000/svg", "rect")
          bar.setAttribute("x", padding + i * (barWidth + gap))
          bar.setAttribute("y", chartHeight - padding - barHeight)
          bar.setAttribute("width", barWidth)
          bar.setAttribute("height", barHeight)
          bar.setAttribute("rx", "4")
          bar.setAttribute("class", `fill-${colors[catIndex % colors.length]}`)

          // Add tooltip on hover
          bar.addEventListener("mouseenter", (e) => {
            const tooltip = document.createElementNS("http://www.w3.org/2000/svg", "text")
            tooltip.setAttribute("x", padding + i * (barWidth + gap) + barWidth / 2)
            tooltip.setAttribute("y", chartHeight - padding - barHeight - 10)
            tooltip.setAttribute("text-anchor", "middle")
            tooltip.setAttribute("class", "text-xs fill-foreground")
            tooltip.textContent = valueFormatter ? valueFormatter(value) : value
            tooltip.setAttribute("id", "tooltip")
            svg.appendChild(tooltip)
          })

          bar.addEventListener("mouseleave", () => {
            const tooltip = svg.querySelector("#tooltip")
            if (tooltip) svg.removeChild(tooltip)
          })

          svg.appendChild(bar)
        })

        // Add x-axis label
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text")
        label.setAttribute("x", padding + i * (barWidth + gap) + barWidth / 2)
        label.setAttribute("y", chartHeight - padding + 20)
        label.setAttribute("text-anchor", "middle")
        label.setAttribute("class", "text-xs fill-muted-foreground")
        label.textContent = item[index]
        svg.appendChild(label)
      })
    }
  }, [data, index, categories, colors, valueFormatter, chartHeight])

  return (
    <div className={cn("w-full h-full", className)} {...props}>
      <svg ref={chartRef} width="100%" height="100%" className="overflow-visible"></svg>
    </div>
  )
}

// Line Chart Component
export function LineChart({ data, index, categories, colors = ["primary"], valueFormatter, className, ...props }) {
  const chartRef = useRef(null)
  const [chartHeight, setChartHeight] = useState(300)

  useEffect(() => {
    if (chartRef.current) {
      const maxValue = Math.max(...data.map((item) => Math.max(...categories.map((cat) => item[cat]))))
      const padding = 40
      const width = 500
      const pointGap = width / (data.length - 1)

      // Clear previous content
      const svg = chartRef.current
      svg.innerHTML = ""

      // Set viewBox
      svg.setAttribute("viewBox", `0 0 ${width + padding * 2} ${chartHeight}`)

      // Draw axes
      const axisLine = document.createElementNS("http://www.w3.org/2000/svg", "line")
      axisLine.setAttribute("x1", padding)
      axisLine.setAttribute("y1", chartHeight - padding)
      axisLine.setAttribute("x2", width + padding)
      axisLine.setAttribute("y2", chartHeight - padding)
      axisLine.setAttribute("stroke", "#e2e8f0")
      axisLine.setAttribute("stroke-width", "2")
      svg.appendChild(axisLine)

      // Draw lines and points
      categories.forEach((category, catIndex) => {
        // Create path for line
        let pathD = ""

        data.forEach((item, i) => {
          const value = item[category]
          const x = padding + i * pointGap
          const y = chartHeight - padding - (value / maxValue) * (chartHeight - padding * 2)

          if (i === 0) {
            pathD += `M ${x} ${y}`
          } else {
            pathD += ` L ${x} ${y}`
          }

          // Add point
          const point = document.createElementNS("http://www.w3.org/2000/svg", "circle")
          point.setAttribute("cx", x)
          point.setAttribute("cy", y)
          point.setAttribute("r", "4")
          point.setAttribute("class", `fill-${colors[catIndex % colors.length]} stroke-background stroke-2`)

          // Add tooltip on hover
          point.addEventListener("mouseenter", (e) => {
            const tooltip = document.createElementNS("http://www.w3.org/2000/svg", "text")
            tooltip.setAttribute("x", x)
            tooltip.setAttribute("y", y - 10)
            tooltip.setAttribute("text-anchor", "middle")
            tooltip.setAttribute("class", "text-xs fill-foreground")
            tooltip.textContent = valueFormatter ? valueFormatter(value) : value
            tooltip.setAttribute("id", "tooltip")
            svg.appendChild(tooltip)
          })

          point.addEventListener("mouseleave", () => {
            const tooltip = svg.querySelector("#tooltip")
            if (tooltip) svg.removeChild(tooltip)
          })

          svg.appendChild(point)
        })

        // Add line
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
        path.setAttribute("d", pathD)
        path.setAttribute("fill", "none")
        path.setAttribute("class", `stroke-${colors[catIndex % colors.length]} stroke-2`)
        svg.appendChild(path)
      })

      // Add x-axis labels
      data.forEach((item, i) => {
        const label = document.createElementNS("http://www.w3.org/2000/svg", "text")
        label.setAttribute("x", padding + i * pointGap)
        label.setAttribute("y", chartHeight - padding + 20)
        label.setAttribute("text-anchor", "middle")
        label.setAttribute("class", "text-xs fill-muted-foreground")
        label.textContent = item[index]
        svg.appendChild(label)
      })
    }
  }, [data, index, categories, colors, valueFormatter, chartHeight])

  return (
    <div className={cn("w-full h-full", className)} {...props}>
      <svg ref={chartRef} width="100%" height="100%" className="overflow-visible"></svg>
    </div>
  )
}

// Pie Chart Component
export function PieChart({
  data,
  index,
  categories,
  colors = ["primary", "secondary", "accent", "muted", "destructive"],
  valueFormatter,
  className,
  ...props
}) {
  const chartRef = useRef(null)
  const [chartHeight, setChartHeight] = useState(300)

  useEffect(() => {
    if (chartRef.current) {
      const total = data.reduce((sum, item) => sum + item[categories[0]], 0)
      const radius = Math.min(chartHeight, 500) / 2 - 40
      const centerX = 250
      const centerY = chartHeight / 2

      // Clear previous content
      const svg = chartRef.current
      svg.innerHTML = ""

      // Set viewBox
      svg.setAttribute("viewBox", `0 0 500 ${chartHeight}`)

      let startAngle = 0

      // Draw pie slices
      data.forEach((item, i) => {
        const value = item[categories[0]]
        const percentage = value / total
        const endAngle = startAngle + percentage * 2 * Math.PI

        // Calculate path
        const x1 = centerX + radius * Math.cos(startAngle)
        const y1 = centerY + radius * Math.sin(startAngle)
        const x2 = centerX + radius * Math.cos(endAngle)
        const y2 = centerY + radius * Math.sin(endAngle)

        const largeArcFlag = percentage > 0.5 ? 1 : 0

        const pathD = `
          M ${centerX} ${centerY}
          L ${x1} ${y1}
          A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}
          Z
        `

        const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
        path.setAttribute("d", pathD)
        path.setAttribute("class", `fill-${colors[i % colors.length]}`)

        // Add hover effect and tooltip
        path.addEventListener("mouseenter", () => {
          path.setAttribute("opacity", "0.8")

          const tooltip = document.createElementNS("http://www.w3.org/2000/svg", "text")
          tooltip.setAttribute("x", centerX)
          tooltip.setAttribute("y", centerY)
          tooltip.setAttribute("text-anchor", "middle")
          tooltip.setAttribute("class", "text-base font-medium fill-foreground")
          tooltip.textContent = `${item[index]}: ${valueFormatter ? valueFormatter(value) : value}`
          tooltip.setAttribute("id", "tooltip")
          svg.appendChild(tooltip)
        })

        path.addEventListener("mouseleave", () => {
          path.setAttribute("opacity", "1")
          const tooltip = svg.querySelector("#tooltip")
          if (tooltip) svg.removeChild(tooltip)
        })

        svg.appendChild(path)

        // Add label
        const labelAngle = startAngle + (endAngle - startAngle) / 2
        const labelRadius = radius * 0.7
        const labelX = centerX + labelRadius * Math.cos(labelAngle)
        const labelY = centerY + labelRadius * Math.sin(labelAngle)

        const label = document.createElementNS("http://www.w3.org/2000/svg", "text")
        label.setAttribute("x", labelX)
        label.setAttribute("y", labelY)
        label.setAttribute("text-anchor", "middle")
        label.setAttribute("class", "text-xs fill-background font-medium")
        label.textContent = `${Math.round(percentage * 100)}%`
        svg.appendChild(label)

        startAngle = endAngle
      })

      // Add legend
      const legendX = 400
      const legendY = 50

      data.forEach((item, i) => {
        const legendItem = document.createElementNS("http://www.w3.org/2000/svg", "g")

        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect")
        rect.setAttribute("x", legendX)
        rect.setAttribute("y", legendY + i * 25)
        rect.setAttribute("width", "15")
        rect.setAttribute("height", "15")
        rect.setAttribute("class", `fill-${colors[i % colors.length]}`)
        legendItem.appendChild(rect)

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text")
        text.setAttribute("x", legendX + 20)
        text.setAttribute("y", legendY + i * 25 + 12)
        text.setAttribute("class", "text-xs fill-muted-foreground")
        text.textContent = item[index]
        legendItem.appendChild(text)

        svg.appendChild(legendItem)
      })
    }
  }, [data, index, categories, colors, valueFormatter, chartHeight])

  return (
    <div className={cn("w-full h-full", className)} {...props}>
      <svg ref={chartRef} width="100%" height="100%" className="overflow-visible"></svg>
    </div>
  )
}

