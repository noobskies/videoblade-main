'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

const chartData = [
  {
    date: '2024-04-01',
    instagram: 222,
    tiktok: 150,
    youtube: 180,
    twitter: 145,
    linkedin: 85
  },
  {
    date: '2024-04-02',
    instagram: 197,
    tiktok: 280,
    youtube: 160,
    twitter: 130,
    linkedin: 75
  },
  {
    date: '2024-04-03',
    instagram: 267,
    tiktok: 220,
    youtube: 190,
    twitter: 155,
    linkedin: 95
  },
  {
    date: '2024-04-04',
    instagram: 242,
    tiktok: 260,
    youtube: 210,
    twitter: 175,
    linkedin: 110
  },
  {
    date: '2024-04-05',
    instagram: 373,
    tiktok: 290,
    youtube: 250,
    twitter: 195,
    linkedin: 125
  },
  {
    date: '2024-04-06',
    instagram: 301,
    tiktok: 340,
    youtube: 280,
    twitter: 210,
    linkedin: 140
  },
  {
    date: '2024-04-07',
    instagram: 345,
    tiktok: 280,
    youtube: 230,
    twitter: 185,
    linkedin: 115
  },
  {
    date: '2024-04-08',
    instagram: 409,
    tiktok: 320,
    youtube: 290,
    twitter: 235,
    linkedin: 155
  },
  {
    date: '2024-04-09',
    instagram: 359,
    tiktok: 310,
    youtube: 270,
    twitter: 215,
    linkedin: 135
  },
  {
    date: '2024-04-10',
    instagram: 461,
    tiktok: 390,
    youtube: 320,
    twitter: 265,
    linkedin: 175
  },
  {
    date: '2024-04-11',
    instagram: 427,
    tiktok: 350,
    youtube: 300,
    twitter: 245,
    linkedin: 160
  },
  {
    date: '2024-04-12',
    instagram: 392,
    tiktok: 310,
    youtube: 280,
    twitter: 225,
    linkedin: 145
  },
  {
    date: '2024-04-13',
    instagram: 442,
    tiktok: 380,
    youtube: 330,
    twitter: 275,
    linkedin: 180
  },
  {
    date: '2024-04-14',
    instagram: 337,
    tiktok: 320,
    youtube: 290,
    twitter: 235,
    linkedin: 150
  }
];

const chartConfig = {
  engagement: {
    label: 'Engagement'
  },
  instagram: {
    label: 'Instagram',
    color: 'hsl(var(--chart-1))'
  },
  tiktok: {
    label: 'TikTok',
    color: 'hsl(var(--chart-2))'
  },
  youtube: {
    label: 'YouTube',
    color: 'hsl(var(--chart-3))'
  },
  twitter: {
    label: 'Twitter',
    color: 'hsl(var(--chart-4))'
  },
  linkedin: {
    label: 'LinkedIn',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('instagram');

  const total = React.useMemo(
    () => ({
      instagram: chartData.reduce((acc, curr) => acc + curr.instagram, 0),
      tiktok: chartData.reduce((acc, curr) => acc + curr.tiktok, 0),
      youtube: chartData.reduce((acc, curr) => acc + curr.youtube, 0),
      twitter: chartData.reduce((acc, curr) => acc + curr.twitter, 0),
      linkedin: chartData.reduce((acc, curr) => acc + curr.linkedin, 0)
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Platform Engagement</CardTitle>
          <CardDescription>
            Engagement metrics across social platforms for the last 14 days
          </CardDescription>
        </div>
        <div className="flex">
          {['instagram', 'tiktok', 'youtube', 'twitter', 'linkedin'].map(
            (key) => {
              const chart = key as keyof typeof chartConfig;
              return (
                <button
                  key={chart}
                  data-active={activeChart === chart}
                  className="relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                  onClick={() => setActiveChart(chart)}
                >
                  <span className="text-xs text-muted-foreground">
                    {chartConfig[chart].label}
                  </span>
                  <span className="text-lg font-bold leading-none sm:text-3xl">
                    {total[key as keyof typeof total].toLocaleString()}
                  </span>
                </button>
              );
            }
          )}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="engagement"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
