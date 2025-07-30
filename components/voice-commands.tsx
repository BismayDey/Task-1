"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mic, MicOff, Volume2, Headphones } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function VoiceCommands() {
  const [isListening, setIsListening] = useState(false)
  const [transcript, setTranscript] = useState("")
  const [isSupported, setIsSupported] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      setIsSupported(true)
    }
  }, [])

  const startListening = () => {
    if (!isSupported) {
      toast({
        title: "Voice commands not supported",
        description: "Your browser doesn't support speech recognition",
        variant: "destructive",
      })
      return
    }

    setIsListening(true)

    // Simulate voice recognition
    setTimeout(() => {
      const commands = [
        "Show me revenue for last month",
        "What's the conversion rate?",
        "Display top campaigns",
        "Export current data",
        "Switch to dark mode",
      ]
      const randomCommand = commands[Math.floor(Math.random() * commands.length)]
      setTranscript(randomCommand)

      toast({
        title: "Voice command recognized",
        description: `Processing: "${randomCommand}"`,
      })

      setIsListening(false)
    }, 3000)
  }

  const stopListening = () => {
    setIsListening(false)
  }

  return (
    <Card className="border-primary/20 bg-gradient-to-r from-purple-500/10 to-blue-500/10">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Headphones className="h-5 w-5 text-primary" />
          Voice Commands
          <Badge variant="secondary" className="ml-auto">
            Beta
          </Badge>
        </CardTitle>
        <CardDescription>Control your dashboard with voice commands</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center">
          <Button
            onClick={isListening ? stopListening : startListening}
            size="lg"
            className={`rounded-full w-16 h-16 ${
              isListening ? "bg-red-500 hover:bg-red-600 animate-pulse" : "bg-primary hover:bg-primary/90"
            }`}
            disabled={!isSupported}
          >
            {isListening ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />}
          </Button>
        </div>

        {isListening && (
          <div className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
              <div className="w-2 h-2 bg-red-500 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
            </div>
            <p className="text-sm text-muted-foreground">Listening...</p>
          </div>
        )}

        {transcript && (
          <div className="p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Volume2 className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Recognized:</span>
            </div>
            <p className="text-sm italic">"{transcript}"</p>
          </div>
        )}

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Try saying:</h4>
          <div className="space-y-1 text-xs text-muted-foreground">
            <p>• "Show me revenue for last month"</p>
            <p>• "What's the conversion rate?"</p>
            <p>• "Display top campaigns"</p>
            <p>• "Export current data"</p>
            <p>• "Switch to dark mode"</p>
          </div>
        </div>

        {!isSupported && (
          <div className="p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              Voice commands require a modern browser with speech recognition support.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
