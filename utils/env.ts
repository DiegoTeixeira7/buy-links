export const env = (name: string): string => {
  const unvalidatedEnvironmentVariable = process.env[name]

  if (!unvalidatedEnvironmentVariable) {
    throw new Error(`Couldn't find environment variable: ${name}`)
  } else {
    return unvalidatedEnvironmentVariable
  }
}

export const envBool = (name: string): boolean => env(name) === 'true'
