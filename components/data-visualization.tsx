"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"

interface DataPoint {
  category: string
  value: number
}

interface DataVisualizationProps {
  data: DataPoint[]
  width?: number
  height?: number
  title?: string
  type?: "bar" | "pie" | "line"
}

export function DataVisualization({
  data,
  width = 500,
  height = 300,
  title = "Data Visualization",
  type = "bar",
}: DataVisualizationProps) {
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!svgRef.current) return

    // Clear previous visualization
    d3.select(svgRef.current).selectAll("*").remove()

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`)

    if (type === "pie") {
      // Create pie chart
      const pie = d3.pie<DataPoint>().value((d) => d.value)
      const arc = d3
        .arc<d3.PieArcDatum<DataPoint>>()
        .innerRadius(0)
        .outerRadius(Math.min(width, height) / 2 - 40)

      const colorScale = d3.scaleOrdinal(d3.schemeCategory10)

      const arcs = svg.selectAll("arc").data(pie(data)).enter().append("g").attr("class", "arc")

      arcs
        .append("path")
        .attr("d", arc)
        .attr("fill", (d, i) => colorScale(i.toString()))
        .attr("stroke", "white")
        .style("stroke-width", "2px")

      // Add labels
      arcs
        .append("text")
        .attr("transform", (d) => `translate(${arc.centroid(d)})`)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .text((d) => d.data.category)
    } else if (type === "bar") {
      // Reset transform for bar chart
      svg.attr("transform", `translate(50, 20)`)

      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.category))
        .range([0, width - 100])
        .padding(0.2)

      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.value) || 0])
        .range([height - 50, 0])

      // Add x-axis
      svg
        .append("g")
        .attr("transform", `translate(0, ${height - 50})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "rotate(-45)")
        .style("text-anchor", "end")

      // Add y-axis
      svg.append("g").call(d3.axisLeft(y))

      // Add bars
      svg
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d) => x(d.category) || 0)
        .attr("y", (d) => y(d.value))
        .attr("width", x.bandwidth())
        .attr("height", (d) => height - 50 - y(d.value))
        .attr("fill", "#e779c1")
    }

    // Add title
    d3.select(svgRef.current)
      .append("text")
      .attr("x", width / 2)
      .attr("y", 20)
      .attr("text-anchor", "middle")
      .style("font-size", "16px")
      .style("font-weight", "bold")
      .text(title)
  }, [data, width, height, title, type])

  return (
    <div className="relative bg-white p-4 rounded-lg shadow-sm">
      <svg ref={svgRef} width={width} height={height} className="mx-auto"></svg>
    </div>
  )
}

