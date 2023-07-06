------------------------------------------------------------------------------
Castle Siege - JavaScript Game Proposal
------------------------------------------------------------------------------
Background:
    
    Castle Siege is an exciting game where players can experience the thrill
    of launching projectiles at castle walls to win sieges and conquer 
    castles! In this game, players will take on the role of a skilled siege
    commander and strategize their attacks to inflict maximum damage on the 
    castle walls. The objective is to breach the castle defenses and claim 
    victory.

------------------------------------------------------------------------------
Functionality & MVPs:
------------------------------------------------------------------------------
In Castle Siege, players will have access to the following core features and functionalities:

    - Launch Projectiles: Players can control the trajectory of the 
    projectile by using the mouse to click and drag an arrow that selects the 
    angle of the shot.

    - Power Adjustment: Players can adjust the power of their shot by 
    utilizing an oscillating power bar controlled by the spacebar. Timing and
    precision are crucial for achieving the desired power level.

    - Physics Simulation: The game will incorporate realistic physics, 
    including factors such as gravity, angle, and air resistance from 
    wind, which will affect the trajectory of the projectile. Players must 
    consider these elements when planning their shots.

    - Score based on time: Players must act quickly and not spend too much time 
    selecting the perfect shot, as the score will be decremented according to how much time has elapsed since the start of the game. The challenge is to inflict as much damage as possible within the shortest time frame.

    - High Score and Progression: The game will track players' scores based 
    on the damage inflicted and the time taken to complete each siege. 
    Players can strive to beat personal high scores, or be a better siege master 
    than their friends(or enemies).

------------------------------------------------------------------------------
In addition to the core features, the project will include:
------------------------------------------------------------------------------
    
    - User-friendly Instructions: Clear instructions on how to play the game 
    and navigate its various features will be provided to ensure a smooth 
    user experience.

    - Responsive User Interface: The game will feature a responsive and 
    intuitive user interface, allowing players to easily interact with the 
    game elements.

    - Game Documentation: A comprehensive README file will be included, 
    providing any relevant details. Additionally, the documentation will 
    explain the physics simulation and how the projectile vectors are handled.

    - Visual Assets: The game will feature visually appealing castle designs, 
    projectiles, and other graphics to enhance the overall gaming experience.

    - Audio Assets: The game will use a web audio API to play a relaxing 
    audio for the game, which can be muted.

------------------------------------------------------------------------------
Technologies, Libraries, APIs
------------------------------------------------------------------------------
The Castle Siege game will utilize the following technologies, libraries, and APIs:
------------------------------------------------------------------------------
    
    - HTML5 Canvas API: The game will be built using the native HTML5 Canvas 
    API for rendering the game graphics and animations.

    - JavaScript: The core functionality of the game will be implemented 
    using JavaScript, including event handling, game logic, physics 
    simulation, and user interactions.

    - CSS: Cascading Style Sheets (CSS) will be used to style the game 
    interface, layout, and visual elements.

------------------------------------------------------------------------------
Implementation Timeline
------------------------------------------------------------------------------
    Friday Afternoon & Weekend:

    - Create the basic HTML structure for the game interface, get webpack and 
    any other add ons up and running.
    - Set up the Canvas element and define its dimensions.
    - Implement the initial rendering of the castle wall and catapult.
    - Implement and style the user interface for the projectile direction vector.
    - create the landing page, with instructions to play the game as well as developer information. 

------------------------------------------------------------------------------
    Monday:

    - Implement the logic for calculating the trajectory based on the mouse 
    input.
    - Implement and stlye the health bar for the wall that appears above it.
    - Ensure the animation features work and re-render the canvas and track a 
    fired shot from catapult to wall. 
    - Integrate the power adjustment feature, allowing players to control the 
    shot's power using the spacebar.

------------------------------------------------------------------------------
    Tuesday:

    - Implement the physics logic for projectile motion, considering start 
    elevation, direction vector, power, gravity, and air resistance. 
    - Implement the damage logic for the collision of projectile vs. wall. 

------------------------------------------------------------------------------
    Wednesday:

    - Basic game operation should be completed by now. 
    - Incorporate the repairing castle wall mechanism, ensuring that the wall 
    repairs itself over time.
    - Implement the scoring system to track damage inflicted and time taken 
    during each siege, store it locally. 
    - Integrate sounds for background music, as well as effects for when the 
    projectile is launched and sound effects for when it hits the wall or 
    ground. 


------------------------------------------------------------------------------
    Thursday Morning:

    - Refine and polish the game interface, ensuring a responsive and 
    visually appealing user experience.
    - Conduct thorough testing and bug fixing to address any issues or glitches.

------------------------------------------------------------------------------
    Thursday Afternoon:

    - Prepare the project presentation, including a demonstration of the 
    game's features and functionality.
    - Deploy the game to GitHub Pages for easy access and showcase.

------------------------------------------------------------------------------

    Note: The Implementation timeline are tentative and subject to 
    adjustments based on project progress and unforeseen challenges that may 
        arise during development.
------------------------------------------------------------------------------

Wireframe URL : https://wireframe.cc/3K69Cw

------------------------------------------------------------------------------