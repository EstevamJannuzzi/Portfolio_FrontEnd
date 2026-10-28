import React, { useId } from 'react'
import { motion } from 'framer-motion'

const defaultColors = [
    'var(--color-light-blue)',
    'var(--color-purple)',
    'var(--color-dark-red)',
    'var(--color-green)',
    'var(--color-yellow)',
]

const Charts = ({ title = 'Gráfico de rosca', data = [], size = 108 }) => {
    const chartId = useId()
    const chartData = data.map((item, index) => ({
        ...item,
        value: Number.isFinite(item.value) ? Math.min(Math.max(item.value, 0), 100) : 0,
        color: item.color || defaultColors[index % defaultColors.length],
    }))
    const groups = chartData.reduce((result, item) => {
        const category = item.category || 'Conhecimentos'
        result[category] ??= []
        result[category].push(item)
        return result
    }, {})

    return (
        <div className="flex w-90 flex-col gap-6 rounded-lg border-l-12 border-light-blue bg-primary/35 px-6 py-8 text-light-gray sm:w-164 lg:w-180 xl:w-190">
            <header className="flex flex-col items-center gap-3 text-center">
                <h2 className="text-[28px] font-bold leading-tight text-light-blue sm:text-[32px] lg:text-[36px] xl:text-[44px]">
                    {title}
                </h2>
                <div
                    aria-hidden="true"
                    className="h-1 w-60 sm:w-70 lg:w-78 xl:w-100 rounded-full bg-linear-to-r from-purple via-light-blue to-green"
                />
            </header>

            {Object.entries(groups).map(([category, items]) => (
                <section key={`${chartId}-${category}`} className="flex flex-col gap-3">
                    <h4 className="font-text text-base font-semibold">{category}</h4>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
                        {items.map((item, index) => {
                            return (
                                <div
                                    key={`${category}-${item.label}-${index}`}
                                    className="flex flex-col items-center gap-2 rounded-lg bg-secondary/30 p-3 text-center transition-transform duration-300 hover:-translate-y-1"
                                >
                                    <svg
                                        width={size}
                                        height={size}
                                        viewBox="0 0 100 100"
                                        role="img"
                                        aria-label={`${item.label}: ${item.value}%`}
                                    >
                                        <circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeOpacity="0.15"
                                            strokeWidth="10"
                                        />
                                        <motion.circle
                                            cx="50"
                                            cy="50"
                                            r="40"
                                            fill="none"
                                            stroke={item.color}
                                            strokeWidth="10"
                                            strokeLinecap="round"
                                            transform="rotate(-90 50 50)"
                                            initial={{ pathLength: 0 }}
                                            animate={{ pathLength: item.value / 100 }}
                                            transition={{
                                                duration: 1.2,
                                                delay: index * 0.06,
                                                ease: 'easeOut',
                                            }}
                                        />
                                        <text
                                            x="50"
                                            y="55"
                                            textAnchor="middle"
                                            className="fill-current font-text text-[18px] font-bold"
                                        >
                                            {item.value}%
                                        </text>
                                    </svg>
                                    <span className="font-text text-sm">{item.label}</span>
                                </div>
                            )
                        })}
                    </div>
                </section>
            ))}
        </div>
    )
}

export default Charts
