"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, Send, Sparkles, TrendingUp, Users, DollarSign } from "lucide-react"
import { useState } from "react"

const sampleQueries = [
  "What was our best performing campaign last month?",
  "Show me conversion rates by traffic source",
  "How did mobile revenue compare to desktop?",
  "Which geographic region has the highest growth?",
]

const queryResults = [
  {
    query: "What was our revenue last month?",
    answer:
      "Your total revenue last month was $847,392, which represents a 12.5% increase compared to the previous month.",
    insights: [
      "Mobile revenue increased by 23%",
      "Top performing campaign: Summer Sale",
      "Conversion rate improved to 3.2%",
    ],
  },
]

export function NaturalLanguageQuery() {
  const [query, setQuery] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState(queryResults)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsProcessing(true)

    // Simulate AI processing
    setTimeout(() => {
      const newResult = {
        query,
        answer:
          "Based on your data, I found several interesting insights. The metrics show positive trends across multiple channels.",
        insights: [
          "Revenue increased by 15.3%",
          "Customer acquisition cost decreased",
          "Mobile engagement improved significantly",
        ],
      }
      setResults([newResult, ...results])
      setQuery("")
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-6 w-6 text-primary" />
          Natural Language Analytics
          <Badge variant="secondary" className="ml-auto bg-gradient-to-r from-purple-500 to-blue-500 text-white">
            <Sparkles className="w-3 h-3 mr-1" />
            AI Powered
          </Badge>
        </CardTitle>
        <CardDescription>Ask questions about your data in plain English and get intelligent insights</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Query Input */}
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            placeholder="Ask me anything about your analytics data..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1"
            disabled={isProcessing}
          />
          <Button type="submit" disabled={isProcessing || !query.trim()}>
            {isProcessing ? <Sparkles className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          </Button>
        </form>

        {/* Sample Queries */}
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Try asking:</h4>
          <div className="flex flex-wrap gap-2">
            {sampleQueries.map((sampleQuery, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs bg-transparent"
                onClick={() => setQuery(sampleQuery)}
                disabled={isProcessing}
              >
                {sampleQuery}
              </Button>
            ))}
          </div>
        </div>

        {/* Results */}
        {results.length > 0 && (
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Recent Queries</h4>
            {results.map((result, index) => (
              <div key={index} className="p-4 rounded-lg bg-background/50 backdrop-blur border">
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MessageCircle className="h-4 w-4 text-primary mt-0.5" />
                    <p className="font-medium text-sm">{result.query}</p>
                  </div>
                  <div className="pl-6">
                    <p className="text-sm text-muted-foreground mb-3">{result.answer}</p>
                    <div className="space-y-2">
                      <h5 className="font-medium text-xs">Key Insights:</h5>
                      <div className="grid gap-2">
                        {result.insights.map((insight, insightIndex) => (
                          <div
                            key={insightIndex}
                            className="flex items-center space-x-2 p-2 bg-muted/50 rounded text-xs"
                          >
                            {insightIndex === 0 && <DollarSign className="h-3 w-3 text-green-500" />}
                            {insightIndex === 1 && <TrendingUp className="h-3 w-3 text-blue-500" />}
                            {insightIndex === 2 && <Users className="h-3 w-3 text-purple-500" />}
                            <span>{insight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* AI Status */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span>AI Assistant Ready</span>
          </div>
          <Badge variant="outline" className="text-xs">
            Powered by GPT-4
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
