;(function () {
  'use strict'

  const get = function (target) {
    return document.querySelector(target)
  }

  const getAll = function (target) {
    return document.querySelectorAll(target)
  }

  const soundsRoot = '/assets/sounds/'
  const drumSounds = [
    { key: 81, sound: '고양이효과음1.wav' },
    { key: 87, sound: '고양이효과음2.wav' },
    { key: 69, sound: '고양이효과음3.wav' },
    { key: 65, sound: '고양이효과음4.wav' },
    { key: 83, sound: '고양이효과음5.wav' },
    { key: 68, sound: '고양이효과음6.wav' },
    { key: 90, sound: '고양이효과음7.wav' },
    { key: 88, sound: '고양이효과음8.wav' },
    { key: 67, sound: '고양이효과음9.wav' },
  ]
})()
