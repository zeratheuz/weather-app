export async function getIcon(icon) {
  try {
    const image = await import(`./assets/icons/${icon}.svg`)
    return image.default
  } catch (err) {
    console.error("Icon not Found", err)
    return (await import(`./assets/icons/not-available.svg`)).default
  }
}