# WorldbuilderWorkshop

Worldbuilder's Workshop is a website for a hypothetical hobby store that focuses on helping customers bring their fictional worlds to life. Users can browse (but not order) products such as paints and tools for modelmaking, as well as tabletop RPG books. They can also make reservations for in-store services, such as using the store's 3D printers or commissioning an item. Signing into the website will allow them to interact with the community, where they can showcase their work, receive tips and feedback, and participate in contests. 

Please note that since there is no backend implementation, certain pages will use LocalStorage and .json files in place of database interaction. This site served as my introduction to React, and was implemented over the course of 4-5 weeks, with the first 2 weeks reserved for creating the mockup and providing peer review. 

To access the website, click this link: [site](https://salina-bee.github.io/WorldbuilderWorkshop/)

To see the mockup, click this link: [mockup](https://drive.google.com/file/d/16Q1AImLMRHUfPbyQGZj-SD7dgfEA-R12/view?usp=sharing)

A general summary of the report, which was written in French (see [here](https://github.com/Salina-Bee/WorldbuilderWorkshop/blob/main/report/Projet%202%20Rapport.docx)), will be made available in the future.

## Tools used:
- React: frontend/SPA development 
- GitHub Pages: website hosting
- Bootstrap 5, CSS: styling
- react-i18next: internationalization (Due to time constraints, this was only implemented for one page, as well as the Navbar.)
- Pencil Project: mockup design

## Things I would've liked to include/change, given more time and experience:
- Include form validation for all pages with forms (e.g. 3D Printing and Commissions page).
- Allow products to be sorted by name or price.
- Give select products badges to denote a discount, out-of-stock status, or new status.
- Make the Community page visible/accessible only to authenticated users.
- Fix routing with react-router-dom so that the 404 page can be reached, and so that refreshing any page that is not the homepage does not result in an error.
- Adjust styling so that the website can be viewed on smaller screens.
