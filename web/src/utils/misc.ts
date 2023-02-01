// Will return whether the current environment is in a regular browser
// and not CEF
export const isEnvBrowser = (): boolean => {
	if (typeof window !== 'undefined') return !(window as any).invokeNative
	return false
}

// Basic no operation function
export const noop = () => { }