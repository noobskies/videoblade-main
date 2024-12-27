'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
    month: 'January',
    instagram: 186000,
    tiktok: 80000,
    youtube: 95000,
    twitter: 120000,
    linkedin: 45000
  },
  {
    month: 'February',
    instagram: 305000,
    tiktok: 200000,
    youtube: 140000,
    twitter: 180000,
    linkedin: 75000
  },
  {
    month: 'March',
    instagram: 437000,
    tiktok: 320000,
    youtube: 210000,
    twitter: 250000,
    linkedin: 110000
  },
  {
    month: 'April',
    instagram: 573000,
    tiktok: 490000,
    youtube: 280000,
    twitter: 310000,
    linkedin: 160000
  },
  {
    month: 'May',
    instagram: 709000,
    tiktok: 630000,
    youtube: 350000,
    twitter: 380000,
    linkedin: 220000
  },
  {
    month: 'June',
    instagram: 814000,
    tiktok: 740000,
    youtube: 420000,
    twitter: 450000,
    linkedin: 290000
  }
];

const chartConfig = {
  posts: {
    label: 'Posts'
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

export function AreaGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Audience Growth</CardTitle>
        <CardDescription>Follower growth across platforms</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[310px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="linkedin"
              type="natural"
              fill="var(--color-linkedin)"
              fillOpacity={0.4}
              stroke="var(--color-linkedin)"
              stackId="a"
            />
            <Area
              dataKey="twitter"
              type="natural"
              fill="var(--color-twitter)"
              fillOpacity={0.4}
              stroke="var(--color-twitter)"
              stackId="a"
            />
            <Area
              dataKey="youtube"
              type="natural"
              fill="var(--color-youtube)"
              fillOpacity={0.4}
              stroke="var(--color-youtube)"
              stackId="a"
            />
            <Area
              dataKey="tiktok"
              type="natural"
              fill="var(--color-tiktok)"
              fillOpacity={0.4}
              stroke="var(--color-tiktok)"
              stackId="a"
            />
            <Area
              dataKey="instagram"
              type="natural"
              fill="var(--color-instagram)"
              fillOpacity={0.4}
              stroke="var(--color-instagram)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Combined growth of 32.4% this month{' '}
              <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
