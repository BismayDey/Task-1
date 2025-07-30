"use client"

import * as React from "react"
import type { DialogProps } from "@radix-ui/react-dialog"
import { Command as CommandPrimitive } from "cmdk"
import {
  Search,
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  User,
  FileText,
  BarChart3,
  TrendingUp,
  Brain,
  Globe,
  Target,
  Users,
  Zap,
  Share2,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Dialog, DialogContent } from "@/components/ui/dialog"

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={cn(
      "flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",
      className,
    )}
    {...props}
  />
))
Command.displayName = CommandPrimitive.displayName

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <CommandPrimitive.Input
      ref={ref}
      className={cn(
        "flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  </div>
))
CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className)}
    {...props}
  />
))
CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => <CommandPrimitive.Empty ref={ref} className="py-6 text-center text-sm" {...props} />)
CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className,
    )}
    {...props}
  />
))
CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={cn("-mx-1 h-px bg-border", className)} {...props} />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...props}
  />
))
CommandItem.displayName = CommandPrimitive.Item.displayName

interface CommandPaletteProps extends DialogProps {
  onTabChange: (tab: string) => void
}

export function CommandPalette({ open, onOpenChange, onTabChange, ...props }: CommandPaletteProps) {
  const [inputValue, setInputValue] = React.useState("")

  const handleSelect = (value: string) => {
    onTabChange(value)
    onOpenChange?.(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange} {...props}>
      <DialogContent className="overflow-hidden p-0 shadow-lg">
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <CommandInput placeholder="Type a command or search..." value={inputValue} onValueChange={setInputValue} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Navigation">
              <CommandItem onSelect={() => handleSelect("overview")}>
                <BarChart3 className="mr-2 h-4 w-4" />
                <span>Overview Dashboard</span>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("analytics")}>
                <TrendingUp className="mr-2 h-4 w-4" />
                <span>Advanced Analytics</span>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("ai-insights")}>
                <Brain className="mr-2 h-4 w-4" />
                <span>AI Insights</span>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("geographic")}>
                <Globe className="mr-2 h-4 w-4" />
                <span>Geographic Analysis</span>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("funnel")}>
                <Target className="mr-2 h-4 w-4" />
                <span>Funnel Analysis</span>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("cohort")}>
                <Users className="mr-2 h-4 w-4" />
                <span>Cohort Analysis</span>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("testing")}>
                <Zap className="mr-2 h-4 w-4" />
                <span>A/B Testing</span>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("collaboration")}>
                <Share2 className="mr-2 h-4 w-4" />
                <span>Collaboration</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Quick Actions">
              <CommandItem>
                <FileText className="mr-2 h-4 w-4" />
                <span>Export Report</span>
              </CommandItem>
              <CommandItem>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Schedule Report</span>
              </CommandItem>
              <CommandItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Dashboard Settings</span>
              </CommandItem>
              <CommandItem>
                <User className="mr-2 h-4 w-4" />
                <span>Team Management</span>
              </CommandItem>
            </CommandGroup>
            <CommandGroup heading="Calculations">
              <CommandItem>
                <Calculator className="mr-2 h-4 w-4" />
                <span>ROI Calculator</span>
              </CommandItem>
              <CommandItem>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Revenue Forecast</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
