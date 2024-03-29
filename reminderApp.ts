import { logReminderAndPlaySound } from "./utilities/logReminderAndPlaySound"

export interface Reminder {
	message: string
	interval: number
	soundFile: string
}

const config: Reminder[] = [
	{
		message: "Time to stop grinding your teeth!",
		interval: 15 * 60000,
		soundFile: "./sounds/bell.wav"
	},
	{
		message: "Take a break and stretch!",
		interval: 30 * 60000,
		soundFile: "./sounds/chime.wav"
	}
]
function reminderApp() {
	for (const reminder of config) {
		logReminderAndPlaySound(reminder)
		setInterval(() => logReminderAndPlaySound(reminder), reminder.interval)
	}
}

reminderApp()
