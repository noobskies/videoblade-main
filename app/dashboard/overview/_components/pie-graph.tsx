'use client';

import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

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
  { platform: 'instagram', posts: 275, fill: 'var(--color-instagram)' },
  { platform: 'tiktok', posts: 320, fill: 'var(--color-tiktok)' },
  { platform: 'youtube', posts: 187, fill: 'var(--color-youtube)' },
  { platform: 'twitter', posts: 223, fill: 'var(--color-twitter)' },
  { platform: 'linkedin', posts: 145, fill: 'var(--color-linkedin)' }
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

export function PieGraph() {
  const totalPosts = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.posts, 0);
  }, []);

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Content Distribution</CardTitle>
        <CardDescription>Posts by Platform</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[360px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="posts"
              nameKey="platform"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalPosts.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Total Posts
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Post frequency up 12.3% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing content distribution across platforms
        </div>
      </CardFooter>
    </Card>
  );
}
