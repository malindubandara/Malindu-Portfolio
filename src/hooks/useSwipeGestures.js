"use client"

import { useState } from "react"

export const useSwipeGestures = (onSwipeLeft, onSwipeRight, threshold = 50) => {
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = threshold

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft()
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight()
    }
  }

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  }
}

export const usePageSwipe = (currentPath, navigate) => {
  const pages = ["/", "/about", "/projects", "/contact"]
  const currentIndex = pages.indexOf(currentPath)

  const goToNextPage = () => {
    if (currentIndex < pages.length - 1) {
      navigate(pages[currentIndex + 1])
    }
  }

  const goToPrevPage = () => {
    if (currentIndex > 0) {
      navigate(pages[currentIndex - 1])
    }
  }

  return { goToNextPage, goToPrevPage, currentIndex, totalPages: pages.length }
}
