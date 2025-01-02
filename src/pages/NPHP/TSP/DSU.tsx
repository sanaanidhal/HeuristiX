import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface Point {
    x: number;
    y: number;
}

interface Edge {
    source: number;
    target: number;
    cost: number;
}

const DSUAnimation = ({ cities, edges }: { cities: Point[], edges: Edge[] }) => {
    const svgRef = useRef<SVGSVGElement | null>(null);

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = 800;
        const height = 600;

        svg.attr('width', width).attr('height', height);

        const g = svg.append('g');

        // Draw cities
        g.selectAll('circle')
            .data(cities)
            .enter()
            .append('circle')
            .attr('cx', d => d.x)
            .attr('cy', d => d.y)
            .attr('r', 5)
            .attr('fill', 'blue');

        // Function to animate edges one by one with arrows
        const animateEdges = (edges: Edge[], index: number) => {
            if (index >= edges.length) return;

            const edge = edges[index];
            const line = g.append('line')
                .attr('x1', cities[edge.source].x)
                .attr('y1', cities[edge.source].y)
                .attr('x2', cities[edge.source].x)
                .attr('y2', cities[edge.source].y)
                .attr('stroke', 'gray')
                .attr('stroke-width', 2)
                .attr('marker-end', 'url(#arrow)');

            line.transition()
                .duration(1000)
                .attr('x2', cities[edge.target].x)
                .attr('y2', cities[edge.target].y)
                .attr('stroke', 'orange')
                .on('end', () => animateEdges(edges, index + 1));
        };

        // Add arrow marker
        svg.append('defs').append('marker')
            .attr('id', 'arrow')
            .attr('viewBox', '0 0 10 10')
            .attr('refX', '5')
            .attr('refY', '5')
            .attr('markerWidth', '6')
            .attr('markerHeight', '6')
            .attr('orient', 'auto-start-reverse')
            .append('path')
            .attr('d', 'M 0 0 L 10 5 L 0 10 z')
            .attr('fill', 'orange');

        // Add a slider to control the number of edges
        d3.select('#slider-container').append('input')
            .attr('id', 'slider')
            .attr('type', 'range')
            .attr('min', 1)
            .attr('max', edges.length)
            .attr('value', edges.length)
            .on('input', function () {
                const value = +this.value;
                g.selectAll('line').remove();
                animateEdges(edges.slice(0, value), 0);
            });

        // Start the animation with all edges
        animateEdges(edges, 0);
    }, [cities, edges]);

    return (
        <div>
            <div id="slider-container"></div>
            <svg ref={svgRef}></svg>
        </div>
    );
};

export default DSUAnimation;