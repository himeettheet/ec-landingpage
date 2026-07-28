const email = 'contact@tmessage.net'


const renderTitle = () => {
    const element = document.getElementById('titlePage');
    if(!element) {
        return
    }
    const menu = [
        {
            name: 'aboutUs',
            title: 'About us',
            href: 'team',
        },
        {
            name: 'features',
            title: 'Guideline',
            href: 'https://blog.tmessage.net/guideline/',
        },
        // {
        //     name: 'pricing',
        //     title: 'Pricing',
        //     href: 'pricing',
        // },
        {
            name: 'pricing',
            title: 'Pricing',
            href: 'https://tmessage.net/pricing',
        },
    ];
    let textHtml = '';
    menu.forEach((item) => {
        let className = 'text-style';
        if (item.name === 'features') {
            className = `${className} q-mx-xl`;
        }
        textHtml =
            textHtml +
            `  <div>
          <a
            class="${className}"
            href="${item.href}"
          >
            ${item.title}
          </a>
        </div>`;
    });
    element.innerHTML = textHtml;
}
const renderCardList = () => {
    const element = document.getElementById('cardList');
    if(!element) {
        return
    }
    const menu = [
        {
            name: 'workspaceChannel',
            image: 'public/landing-page/emoji_television_.svg',
            title: 'Workspace & Channel',
            description: 'Create workspaces & channels for your own team and project',
        },
        {
            name: 'oneToOne',
            image: 'public/landing-page/emoji_raising_hands_.svg',
            title: 'One to one',
            description:
                'Directly message to manage tasks between 2 people or even yourself',
        },
        {
            name: 'calendar',
            image: 'public/landing-page/emoji_calendar_.svg',
            title: 'Calendar',
            description: 'Synthesize all followed tasks in your calendar view',
        },
        {
            name: 'comment',
            image: 'public/landing-page/emoji_speech balloon_.svg',
            title: 'Comment',
            description: 'Diversely interact among teams via text, images and emoji',
        },
        {
            name: 'notification',
            image: 'public/landing-page/emoji_bell_.svg',
            title: 'Notification',
            description: 'Avoid missing any update about your tasks and comments',
        },
        {
            name: 'adminDashboard',
            image: 'public/landing-page/emoji_bar_chart_.svg',
            title: 'Admin dashboard',
            description: 'Provide overview of workspace\'s performance and help you evaluate work efficiency'
        },
    ];
    let textHtml = '';
    menu.forEach((item) => {
        textHtml =
            textHtml +
            `<div
            class="card-list__items col-lg-4 col-md-12"
          >
            <img
              src="${item.image}"
              alt="${item.name}"
            />
            <div class="card-list__title">${item.title}</div>
            <div class="card-list__description">
              ${item.description}
      </div>
          </div>`;
    });
    element.innerHTML = textHtml;
}
const renderListCalendarType = () => {
    const listCalendarType = [
        {
            type: 'overdue',
            text: 'Overdue task',
        },
        {
            type: 'indue',
            text: 'Upcoming task',
        },
        {
            type: 'done',
            text: 'Done task',
        },
    ];
    let textHtml = '';
    listCalendarType.forEach((itemType) => {
        let className = `badge-calendar badge-calendar-${itemType.type}`;
        textHtml =
            textHtml +
            `<div
              class="view-badge-calendar-item"
            >
              <div
                class="${className}"
              >
                <span>5</span>
              </div>
              <div class="view-badge-calendar-item-text">
                ${itemType.text}
              </div>
            </div>`;
    });
    return textHtml;
}
const renderFunctionList = () => {
    const element = document.getElementById('functionList');
    if(!element) {
        return
    }
    const menu = [
        {
            name: 'messaging',
            image: `<img src="public/landing-page/img-a1.svg" alt="screen_function"/>`,
            title: 'Organize simply like a <span class="primary-01"> CHAT </span> app with <span class="primary-01"> Channel </span> and <span class="primary-01"> One-to-one </span>',
            description:
                'Mange working tasks simply to save your time. Easily switch from a conversation to other tabs.',
        },
        {
            name: 'actions',
            // image: svgA6,
            image: `<img src="public/landing-page/img-a6.svg" alt="screen_function"/>`,
            title: 'Let’s start with <span class="primary-01">CHAT</span>',
            description:
                'With a simple, casual and familiar UX, you can jump in any conversation with your team. But what if something important or critical need to follow up? Just <span class="primary-01"> Convert to task </span> to do later.',
        },
        {
            name: 'tasks',
            image: `<img src="public/landing-page/img-a2.svg" alt="screen_function"/>`,
            title: 'Manage daily work with <span class="primary-01">TASKS</span>',
            description:
                'You can 100% focus on a issue/idea/to-do/etc with your team via a task post with friendly interaction like social media such as comment and react.',
        },
        {
            name: 'calendar',
            // image: svgA2,
            image: `<img src="public/landing-page/img-a4.svg" alt="screen_function"/>`,
            title: 'Convenient <span class="primary-01">calendar</span> <br> to follow task',
            description:
                'If you need a master view, we got a simple but comprehensive calendar to support and track all your daily tasks.',
        },
        {
            name: 'interesting',
            image: `<img src="public/landing-page/img-a5.svg" alt="screen_function"/>`,
            title:
                'Save your work with <span class="primary-01">WIKI</span>',
            description:
                'Need a wiki page to <span class="primary-01">capture working processes, share and save knowledge</span> for new joiners? We create a simple wiki tab for you. Just post and start discussing a hot topic with your teammates.',
        },
    ];
    let textHtml = '';
    menu.forEach((item) => {
        let textHtmlCalendar =
            item.name === 'calendar'
                ? `<div
            class="view-badge-calendar"
          >
            ${renderListCalendarType()}
          </div>`
                : '';
        textHtml =
            textHtml +
            `<div
        class="row function__list"
      >
        <div class="function__list-img col-lg-6 col-xs-12">${item.image}</div>
        <div class="col-lg-6 col-xs-12 function__right">
          <div
            class="function__title"
          >
          ${item.title}
          </div>
          <div class="function__description">
            ${item.description}
          </div>
          ${textHtmlCalendar}
        </div>
      </div>`;
        //      :class="`badge-calendar-${itemType.type}`"
    });
    element.innerHTML = textHtml;
}
const renderFooter = () => {
    const element = document.getElementById('footerPage')
    if(!element) {
        return
    }
    const menu = [
        // {
        //     name: 'contact',
        //     title: `Contact us: ${email}`,
        //     href: `mailto:${email}`
        // },
        {
            name: 'aboutUs',
            title: 'About us',
            href: 'team'
        },
        // {
        //     name: 'features',
        //     title: 'Features',
        //     href: '/#featurePage'
        // },
        // {
        //     name: 'pricing',
        //     title: '',
        //     href: 'pricing'
        // },
        {
            name: 'blog',
            title: 'Blog',
            href: 'https://blog.tmessage.net/'
        },
        {
            name: 'eula',
            title: 'EULA',
            href: 'https://blog.tmessage.net/eula/'
        },
        {
            name: 'terms',
            title: 'Terms',
            href: ' https://blog.tmessage.net/terms/'
        },
        {
            name: 'privacy',
            title: 'Privacy',
            href: ' https://blog.tmessage.net/privacy/'
        },
    ]
    let textHtml = ''
    menu.forEach((item) => {
        let className = 'footer__text-style'
        textHtml = textHtml + `  <div>
            <a
              class="${className}"
                href="${item.href}"
            >
              ${item.title}
            </a>
          </div>`
    })
    element.innerHTML = textHtml
}
const renderFooterMobile = () => {
    const element = document.getElementById('footerPages');
    if(!element) {
        return
    }
    const menu = [
        // {
        //     name: 'contact',
        //     title: `Contact us: ${email}`,
        //     href: `mailto:${email}`
        // },
        {
            name: 'aboutUs',
            title: 'About us',
            href: 'team',
        },
        // {
        //     name: 'features',
        //     title: 'Features',
        //     href: '/#featurePage',
        // },
        // {
        //     name: 'pricing',
        //     title: 'Pricing',
        //     href: 'pricing',
        // },
        {
            name: 'blog',
            title: 'Blog',
            href: 'https://blog.tmessage.net/'
        },
        {
            name: 'eula',
            title: 'EULA',
            href: 'https://blog.tmessage.net/eula/'
        },
        {
            name: 'terms',
            title: 'Terms',
            href: ' https://blog.tmessage.net/terms/'
        },
        {
            name: 'privacy',
            title: 'Privacy',
            href: ' https://blog.tmessage.net/privacy/'
        },
    ];
    let textHtml = '';
    menu.forEach((item) => {
        let classText = 'footer-content';
        let className = 'footer__text-style';
        textHtml =
            textHtml +
            `  <div class="${classText}">
          <a
            class="${className}"
              href="${item.href}"
          >
            ${item.title}
          </a>
        </div>`;
    });
    element.innerHTML = textHtml;
}
const renderLinkEmail = () => {
    const element =  document.getElementsByClassName('text-link-email')
    if(!element) {
        return
    }
    let textHtml =
        `<a class="text-link-email" href="mailto:${email}">
                        ${email}
                    </a>`;
    for (let i = 0; i < element.length; i++) {
        element[i].outerHTML = textHtml;
    }
}
const renderOurTeam = () => {
    const element = document.getElementById('ourList');
    if(!element) {
        return
    }
    const menu = [
        {
            name: 'introduce',
            image: `<img src="public/landing-page/our-team1.svg" alt="screen_function"/>`,
            description:
                '<div class="q-mb-10">Hi guys, we are an indie team from Vietnam <img src="public/landing-page/VN.svg" alt="VietNam"/></div> <div>We love to build simple products to help people overcome the chaos in the digital era.</div>',
        },
        {
            name: 'plans',
            image: `<img src="public/landing-page/our-team2.svg" alt="screen_function"/>`,
            description:
                '<div class="q-mb-10">What does TMessage mean? </div><div></div> <div class="q-mb-10"> <span class="primary-03">TMessage</span><span class="team-weight"> = To-do (Task) + Message. </span></div> <div>Using TMessage, You can manage your to-do lists as easily as you manage your text messages.</div>',
        },
        {
            name: 'value',
            image: `<img src="public/landing-page/our-team3.svg" alt="screen_function"/>`,
            description:
                '<div>TMessage is designed for small and medium teams to focus on speed.</div> <div>Our product is designed like a conversation for users, whereas other products are designed around either the Kanban or Agile approach.</div>',
        },
    ];
    let textHtml = '';
    menu.forEach((item) => {
        let textHtmlCalendar =
            item.name === 'actions'
                ? `<div
            class="view-badge-calendar"
          >
            ${renderListCalendarType()}
          </div>`
                : '';
        textHtml =
            textHtml +
            `<div class="row team__list ${item.name}">
                <div class="team__list-img">${item.image}</div>
                <div class="team__right">
                    <div class="team__description">
                        ${item.description}
                    </div>
                </div>
            </div>`;
    });
    element.innerHTML = textHtml;
}
const renderChatBox = () => {
    const element = document.getElementById('chatBox');
    if(!element) {
        return
    }
    const menu = [
        {
            name: 'chat',
            image: `<img src="public/logo.svg" alt="logo"/>`,
            description:
                '<span>Hate <span class=primary-02>subscription base</span>? Feeling unfair as you don’t use up what you pay?</span> <br> <span>We offer you a usage - based pricing with different packs of points. Just get flexible with your team and <span class="primary-02">pay for what you use.</span></span>',
        },
        {
            name: 'user',
            image: `<img src="public/landing-page/chat-user.svg" alt="chat-user"/>`,
            description:
                '<span>What do I use points for?</span>',
        },
        {
            name: 'chat',
            image: `<img src="public/logo.svg" alt="logo"/>`,
            description:
                '<span>1 point can be exchanged for <span class="primary-02">1 new task or 1 new wiki post or 1 active member</span> in your workspace.</span>',
        },
        {
            name: 'chat',
            image: `<img src="public/logo.svg" alt="logo"/>`,
            description:
                '<span>Additionally, your team can get <span class="primary-02">unlimited chat</span> to discuss and keep up with others.</span>',
        },
        {
            name: 'user',
            image: `<img src="public/landing-page/chat-user.svg" alt="chat-user"/>`,
            description:
                '<span>What if I don’t use up my points in 1 month?</span>',
        },
        {
            name: 'chat',
            image: `<img src="public/logo.svg" alt="logo"/>`,
            description:
                '<span>Your points will expire and you need to buy a new pack for your workspace.</span>',
        },
        {
            name: 'chat',
            image: `<img src="public/logo.svg" alt="logo"/>`,
            description:
                `<span>A small note for you is that your workspace will be <span class="primary-02">locked</span> if <br><span>1. You use up all your points.</span> <br> <span>2. Your points expire and you don't further extend.</span></span>`,
        },
        {
            name: 'user',
            image: `<img src="public/landing-page/chat-user.svg" alt="chat-user"/>`,
            description:
                `<span>So I can't access all my workspace's data after it is locked?</span>`,
        },
        {
            name: 'chat',
            image: `<img src="public/logo.svg" alt="logo"/>`,
            description:
                `<span>Don't worry, you still can access to your workspace and your data within 45 days since your workspace was locked.</span>`,
        },
        {
            name: 'chat',
            image: `<img src="public/logo.svg" alt="logo"/>`,
            description:
                '<span>Please be aware that <span class="primary-02">after 45 days </span>once your points expire and no payment is made, your workspace <span class="primary-02">will be deleted</span> permanently. If you want to archive your data before the delete date, please contact us for further support.</span>',
        },
    ];
    let textHtml = '';
    menu.forEach((item) => {
        let textHtmlCalendar =
            item.name === 'actions'
                ? `<div
            class="view-badge-calendar"
          >
            ${renderListCalendarType()}
          </div>`
                : '';
        textHtml =
            textHtml +
            `<div class="row chat__list ${item.name}">
                <div class="chat__list-img">${item.image}</div>
                <div class="chat__right">
                    <div class="chat__description">
                        ${item.description}
                    </div>
                </div>
            </div>`;
    });
    element.innerHTML = textHtml;
}

renderTitle()
renderCardList()
renderFunctionList()
renderFooter()
renderFooterMobile();
renderOurTeam();
renderChatBox();
renderLinkEmail()
