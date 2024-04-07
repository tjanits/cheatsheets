
# useful frameworks and info
## Astrowind
combination of Tailwind css and Astro

running the your webpage locally:
```
    npm run dev
```
can be accessed at localhost:1234

vscode requires an extension called 'Astro'

### uploading the webpage (on server)
first build the project:
```
    npm run build
```
second establish sftp connection to the server:
- open Files
- Other Locations
- 'Enter server address' at the bottom
- sftp://[username]@[server-address]
- go to astro project
- copy content in /dist directory
- go to sftp-connected server directory
- paste content in htdocs directory

## Tailwind CSS
https://tailwindcss.com/docs for infos

using constants to initialize the content in index and not the model:
Model:
```html
    const {
      title = await Astro.slots.render('title'),
      subtitle = await Astro.slots.render('subtitle'),
      tagline,
      content = await Astro.slots.render('content'),
      callToAction,
      items = [],
      columns,
      image = await Astro.slots.render('image'),
      isReversed = false

      id,
      isDark = false,
      classes = {},
      bg = await Astro.slots.render('bg'),
    } = Astro.props as Content;
---
```
Index
```html
    <Content
        isReversed
        tagline="The vision"
        title="Greenative: How good are you?"
        items={[
          {
            title: 'Creative',
	    description:
              'Get creative and post the coolest, funniest or most on spot picture.',
          },
          {
            title: 'Fun',
            description:
              'Have fun looking at your friends creations, discuss who\'s is the best.',
          },
          {
            title: 'Good',
            description:
              'Preserve what\'s left of nature and provide for the future.',
          },
        ]}
        image={{
           src: '~/assets/images/garbage.jpg',
           alt: 'Turtle on plastic',
        }}
```
