const divider = "==============================================================================================================================================="
const commands = {
    list() {
        const descriptions = {
            list: "Show me the commands again :)",
            whoami: "Wanna stalk me?",
            skills: "What do I know?",
            projects: "Take a look at some of my work",
            socials: "Say Hi! ;)",
            cv: "Get my CV in PDF and it's weight is just 71KB",
            header: "Render the banner",
            all: "Show me all",
            clear: "Clear the terminal",
        };
        term.echo("You can type a few letters and press [tab] \nto autocomplete any of the commands available to use: \n");
        for (let cmd in descriptions) {
            term.echo(` [[b;#64ED6C;]${cmd}]\n   ${descriptions[cmd]}\n`);
        }
    },
    whoami() {
        aboutMe();
    },
    skills() {
        skills();
    },
    projects() {
        projects();
    },
    socials() {
        socials();
    },
    all() {
        aboutMe();
        skills();
        projects();
        socials();
    },
    cv() {
        downloadCv();
    },
    header(){
        showheader();
    },
    clear() {
        render();
    }
};

const formatter = new Intl.ListFormat('en', {
    style: 'long',
    type: 'conjunction',
});

const command_list = (Object.keys(commands));
const help = formatter.format(command_list);

const greetings = "Welcome to my term site freaks 👾";
const instructions = "Type [[b;#64ED6C;]'list'] to see the available commands to use";
const date = "-- written by: [[;#D3BFFF;]cristian zapata]";
const version = "[[;#D3BFFF;][v 1.0.0]]";


// Load fonts from filget library 
const font = 'ANSI Shadow';

figlet.defaults({ fontPath: 'https://unpkg.com/figlet/fonts/' });
figlet.preloadFonts([font], ready);

const term = $('body').terminal(commands, {
    greetings: false,
    checkArity: false,
    exit: false,
    completion: true,
    prompt,
    onCommandNotFound: function() {
        this.error(`Can you stop trying weird stuff please?, type list to display the available commands`);
    }
});

function ready() {
    showheader();
}

function render(text) {
    const cols = term.cols();
    return figlet.textSync(text, {
        font: font,
        width: cols,
        whitespaceBreak: true
    });
}

function prompt () {
    return `[[;#64ED6C;]guest@theposintech:[[;#55f;]$>>] `
}

// Functions to display information
function showheader() {
    term.echo(() => {
        const ascii = render('theposintech');
        const coloredAscii = `[[;#64ED6C;]${ascii}]`;
        return `${coloredAscii}\n${date} - ${version}\n\n${greetings}\n\n${instructions}\n`;
    });
}

function aboutMe() {
    const render = 
`${divider}
([[;#64ED6C;]*]) Jmmm it seems you're a bit gossipy huh?, well now that you wanna stalk me I'll let you know more about me ‾\\['-']/‾

My name is [[;#64ED6C;]Cristian Zapata], I am a 25 years old [[;#64ED6C;]Graphic Designer, Software developer, and content creator] on the journey
to become [[;#64ED6C;]SysAdmin] and [[;#64ED6C;]DevOps Engineer].

A few years ago I discovered my passion for tech and arts, and seeking to merge these passions, I started learning front-end development
on my own, and during my Graphic Design degree I worked as a front-end developer in an e-commerce company called [[!;;;;https://rocketfy.com/]Rocketfy] for thousands
Latin American sellers where I learned a lot and I realized tech is mooooore big than I thought.

Now I'm studying software development in 42 Madrid where I've had the opportunity to dive into Linux systems, programming in C,
shell scripting, and discovering a new love there. Apart from that I work on some projects as my configs for Linux with my dotfiles,
my personal neovim and window manager configurations, and also blog all those interesting things I'm learning in this path trying to
share my knowledge, experience, and maybe helping someone all this can be helpful.

Out of the screen my [[;#FF4747;]hobbies] are:
    [[;#FF4747;]@] Hiking, climbing and calisthenics 
    [[;#FF4747;]@] The sculpturing
    [[;#FF4747;]@] Made some custom keyboards
    [[;#FF4747;]@] The art and photography ([[!;;;;https://www.instagram.com/zac_359/]here] my art Instagram)

Please feel free to get in touch with me to discuss any cool opportunities or ideas. My contact details can be found by typing '[[;#64ED6C;]socials]',
and if you would like to check out my CV just type '[[;#64ED6C;]cv]'. 
${divider}`
term.echo(render);
}

function socials() {
    const socials = {
        github: "https://github.com/theposi",
        mail: "theposidesign@gmail.com",
        blog: "https://theposintech.hashnode.dev/?source=top_nav_blog_home",
        instagram: "https://www.instagram.com/theposintech/?next=%2F",
        linkedin: "https://www.linkedin.com/in/cristian-zapata-arias-6733a6220/",
    }
    term.echo(`${divider}`)
    term.echo("\n Feel free to say hi!\n");
    for (let social in socials) {
        term.echo(` [[b;#64ED6C;]${social}]: ${socials[social]}`);
    }
    term.echo(`\n${divider}`)
}

function skills() {
    const skills = {
        langs: [
            "C",
            "Bash",
            "JavaScript",
            "TypeScript",
        ],

        tools: [
            "Vim & Neovim",
            "Git",
            "VsCode",
        ],

        web: [
            "HTML",
            "CSS",
            "Angular",
        ], 

        inProgress: [
            "AWS",
            "Linux & OS",
            "Docker",
            "Kubernetes",
            "Virtualization VM",
            "System Administration"
        ],
    };

    const categories = {
        langs: "Languages",
        tools: "Tools",
        web: "Web",
        inProgress: "In progress"
    }

    term.echo(divider)
    term.echo("\nHere is the stuff I know about: \n");
    
    for (let category in categories) {
        term.echo(`[[b;#DDA0DD;]${categories[category]}]`);
        term.echo("[[;#44009A;]==============================]")
        for (item of skills[category]) {
            term.echo(`[[;#FF4747;]*] ${item}`);
        }
        term.echo("[[;#44009A;]==============================\n]")
    }
    term.echo(divider)
}

function projects() {
    const projects = {
        Cloud: {
            title: "Cloud",
            link: "https://github.com/theposi/cloud",
            description: "My DevOps and cloud learning path projects.",
        },
        dotfiles: {
            title: "Dotfiles",
            link: "https://github.com/theposi/dotfiles",
            description: "Check how I manage my dotfiles configurations and also the apps I use \n     in my terminal-focused workflow using Git, GitHub, and Stow.",
        },
        nvim: {
            title: "Nvim",
            link: "https://github.com/theposi/dotfiles/tree/main/.config/nvim",
            description: "My own Neovim configs, the plugins I use and how it works as an IDE." 
        },
        i3: {
            title: "i3wm",
            link: "https://github.com/theposi/dotfiles/tree/main/.config/i3",
            description: "The window manager I use and how I configured it." 
        },
        cursus: {
            title: "42 Madrid",
            link: "https://github.com/theposi/42-madrid-cursus",
            description: "Take a look at the projects I'm working on my cursus."
        },
        blog : {
            title: "Tech blog",
            link: "https://theposintech.hashnode.dev/",
            description: "Check my tech blog about Nvim, Linux, commands and more."
        },
    }

    const openbr = "[";
    const closebr = "]";

    term.echo(divider)
    term.echo("\n  Some cool stuff I've done and I'm working on:")

    for (let project in projects) {
        const projectKey = projects[project]
        term.echo(`\n  [[;;]${openbr}][[b;#64ED6C;]>][[;;]${closebr}] [[;#64ED6C;]${projectKey.title}]     [[!;;;;${projectKey.link}]repo ↗]`);
        term.echo(`  |_ ${projectKey.description} \n`);
    }
    term.echo(divider)
}

function downloadCv() {
    const name = "Cristian Zapata - Curriculum Vitae.pdf"
    const uri = "downloads/Cristian Zapata - Curriculum Vitae.pdf"

    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    link.click();
    term.echo("\nNice! Now you have my CV and remember...\n");
    term.echo("[[;#64ED6C;]“With great power comes great responsibility”]");
    term.echo("Uncle Ben\n");
}

