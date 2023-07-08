import '../PrivacyPolicy/PrivacyPolicy.scss' // borrowing styles

import logo from './logo.svg'

export default function TOU() {
    return (
        <div className={'privacy-policy'}>
            <div className={'container fs-16px pb-5'}>
                <div className={'d-flex justify-content-center justify-content-md-center py-5'}>
                    <svg width="286" height="96" viewBox="0 0 286 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_296_38031)">
                            <path d="M249.967 70.6783H285.053C285.561 70.6783 285.975 70.2616 285.975 69.7505V58.8356C285.975 58.3245 285.561 57.9078 285.053 57.9078H263.698V51.8726H280.938C281.403 51.8726 281.779 51.4946 281.779 51.0264V42.3925C281.779 41.9243 281.403 41.5463 280.938 41.5463H263.698V36.5205H284.139C284.604 36.5205 284.98 36.1425 284.98 35.6743V23.4751C284.98 23.0069 284.604 22.6289 284.139 22.6289H249.967C249.459 22.6289 249.045 23.0456 249.045 23.5567V69.7548C249.045 70.2659 249.459 70.6826 249.967 70.6826V70.6783Z" fill="#237D91"/>
                            <path d="M24.5854 60.8373C23.2452 58.6896 21.8622 56.4688 20.6842 55.6569C20.2275 55.3434 19.8348 55.0899 19.4805 54.8837C18.6781 54.4241 17.6836 55.0298 17.6836 55.9576V95.0767C17.6836 95.5835 18.0976 96.0002 18.6013 96.0002H31.4189C31.9268 96.0002 32.3408 95.5836 32.3408 95.0724V70.9145C32.3408 70.5494 32.1701 70.2058 31.8884 69.9738C28.5805 67.2376 26.3397 63.6551 24.5811 60.8373H24.5854Z" fill="#237D91"/>
                            <path d="M65.9062 25.6223C63.2428 23.6893 60.1013 22.71 56.9044 22.71H43.4636C38.2648 22.71 34.9398 25.2658 32.3447 28.4831V24.0072C32.3447 23.8826 32.3234 23.7752 32.2764 23.6679C32.1484 23.3199 31.8027 23.0708 31.4143 23.0708H18.6137C18.1015 23.0708 17.6918 23.4917 17.6918 24.0072V42.684C15.1777 42.916 11.9125 42.3704 6.35521 41.1204C4.7162 40.751 3.59791 40.4976 2.8723 40.3344C2.01438 40.1411 1.15219 40.6136 0.759506 41.4727C-0.11549 43.4228 0.00402133 46.5242 0.00402133 46.5242C0.00402133 46.5242 -0.119759 49.6255 0.759506 51.5671C1.14792 52.4262 2.01438 52.8987 2.8723 52.7054C3.59791 52.5422 4.7162 52.2887 6.35521 51.9236C16.7186 49.5955 19.1003 49.6985 23.5393 52.7655C29.4295 56.8377 31.5167 70.3341 43.4636 70.3341H56.9044C60.1013 70.3341 63.2428 69.3547 65.9062 67.4303C69.1159 65.1022 72.3299 61.0258 72.3299 54.037V39.0114C72.3299 32.0269 69.1159 27.9548 65.9062 25.6266V25.6223ZM47.8044 57.2629C41.9996 57.2629 37.2917 52.525 37.2917 46.6831C37.2917 40.8412 41.9996 36.1033 47.8044 36.1033C53.6093 36.1033 58.3129 40.8412 58.3129 46.6831C58.3129 52.525 53.6093 57.2629 47.8044 57.2629Z" fill="#237D91"/>
                            <path d="M202.508 68.7534L180.94 47.0568L203.528 24.2907C204.109 23.7065 203.699 22.71 202.879 22.71H184.948C184.701 22.71 184.462 22.8088 184.287 22.9849L166.586 40.7983V23.5003C166.586 23.0665 166.236 22.71 165.801 22.71H152.625C152.194 22.71 151.839 23.0622 151.839 23.5003V69.548C151.839 69.9819 152.189 70.3384 152.625 70.3384H165.801C166.232 70.3384 166.586 69.9862 166.586 69.548V61.6057L170.709 57.4347L183.258 70.0635C183.433 70.2396 183.672 70.3384 183.92 70.3384H201.855C202.675 70.3384 203.089 69.3419 202.508 68.7577V68.7534Z" fill="#237D91"/>
                            <path d="M209.427 70.7037H243.42C243.928 70.7037 244.342 70.287 244.342 69.7759V58.861C244.342 58.3498 243.928 57.9332 243.42 57.9332H223.158V23.5821C223.158 23.071 222.744 22.6543 222.236 22.6543H209.427C208.919 22.6543 208.505 23.071 208.505 23.5821V69.7802C208.505 70.2913 208.919 70.708 209.427 70.708V70.7037Z" fill="#237D91"/>
                            <path d="M180.322 80.1449H174.137C173.924 80.1449 173.723 80.2437 173.591 80.4026L166.625 89.0366L159.621 80.4026C159.484 80.2394 159.288 80.1449 159.074 80.1449H152.57C152.185 80.1449 151.87 80.4628 151.87 80.8494V94.7668C151.87 95.1534 152.185 95.4712 152.57 95.4712H156.117C156.501 95.4712 156.812 95.1534 156.812 94.7668V85.4799L164.717 95.2092C164.849 95.3724 165.046 95.4669 165.255 95.4669H166.954C167.167 95.4669 167.368 95.3681 167.5 95.2092L175.401 85.4155V94.7625C175.401 95.1491 175.716 95.4669 176.101 95.4669H180.322C180.706 95.4669 181.022 95.1491 181.022 94.7625V80.8451C181.022 80.4585 180.706 80.1406 180.322 80.1406V80.1449Z" fill="#237D91"/>
                            <path d="M210.801 80.4591C210.669 80.2615 210.451 80.1455 210.221 80.1455H204.975C204.745 80.1455 204.527 80.2615 204.395 80.4505L194.941 94.3679C194.625 94.8361 194.958 95.4718 195.521 95.4718H199.316C199.55 95.4718 199.768 95.3516 199.896 95.154L201.416 92.8344H212.765L214.284 95.154C214.412 95.3516 214.63 95.4718 214.865 95.4718H219.526C220.081 95.4718 220.414 94.8404 220.106 94.3765L210.806 80.4591H210.801ZM203.52 89.6643L207.139 84.1575L210.72 89.6643H203.52Z" fill="#237D91"/>
                            <path d="M252.302 91.8679H240.735C240.15 91.8679 239.672 91.3868 239.672 90.7983V80.85C239.672 80.4634 239.356 80.1455 238.972 80.1455H234.751C234.362 80.1455 234.051 80.4634 234.051 80.85V90.9315C234.051 93.4358 236.065 95.4718 238.554 95.4718H252.302C252.686 95.4718 253.002 95.154 253.002 94.7674V92.5724C253.002 92.1858 252.686 91.8679 252.302 91.8679Z" fill="#237D91"/>
                            <path d="M285.3 91.8679H273.733C273.148 91.8679 272.67 91.3868 272.67 90.7983V80.85C272.67 80.4634 272.354 80.1455 271.97 80.1455H267.749C267.36 80.1455 267.049 80.4634 267.049 80.85V90.9315C267.049 93.4358 269.068 95.4718 271.552 95.4718H285.3C285.684 95.4718 286 95.154 286 94.7674V92.5724C286 92.1858 285.684 91.8679 285.3 91.8679Z" fill="#237D91"/>
                            <path d="M92.7408 22.6543H79.7696C79.3052 22.6543 78.9287 23.0332 78.9287 23.5005V69.8618C78.9287 70.3291 79.3052 70.708 79.7696 70.708H92.7408C93.2052 70.708 93.5817 70.3291 93.5817 69.8618V23.5005C93.5817 23.0332 93.2052 22.6543 92.7408 22.6543Z" fill="#237D91"/>
                            <path d="M86.7911 17.3514C91.5461 17.0537 95.1609 12.9331 94.8651 8.14787C94.5692 3.36263 90.4748 -0.275232 85.7199 0.0224758C80.965 0.320184 77.3502 4.44073 77.646 9.22596C77.9418 14.0112 82.0362 17.6491 86.7911 17.3514Z" fill="#237D91"/>
                            <path d="M131.058 22.71H114.612C106.438 22.71 99.8096 29.3809 99.8096 37.6067V55.8153C99.8096 64.0412 106.434 70.7078 114.608 70.7078H131.058C139.231 70.7078 145.856 64.0412 145.856 55.8153V52.8042C145.856 52.0697 145.262 51.4726 144.533 51.4726H132.808C132.372 51.4726 131.958 51.6831 131.719 52.0525C129.888 54.866 126.67 56.683 123.038 56.5026C118.056 56.2578 113.967 52.1341 113.737 47.1213C113.477 41.4641 117.958 36.7906 123.524 36.7906C126.952 36.7906 129.965 38.5646 131.715 41.2493C131.954 41.6187 132.368 41.8335 132.808 41.8335H144.533C145.262 41.8335 145.856 41.2364 145.856 40.5019V37.6024C145.856 29.3766 139.231 22.71 131.058 22.71Z" fill="#237D91"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_296_38031">
                                <rect width="286" height="96" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <h1 className={'mb-0'}>Website Terms of Service</h1>
                <p className={'mt-1 mb-5'}>
                    Last modified: April 18, 2023
                </p>

                <p>
                    <strong>Acceptance of the Terms of Use</strong>
                </p>
                <p>
                    These terms of use are entered into by and between You and PickleMall, Inc. (<strong>"Company,"
                    "we," </strong>or<strong> "us"</strong>). The following terms and conditions, together with any
                    documents they expressly incorporate by reference (collectively, <strong>"Terms of Use"</strong>),
                    govern your access to and use of thepicklemall.com, including any content, functionality and
                    services offered on or through https://thepicklemall.com (the <strong>"Website"</strong>), whether
                    as a guest or a registered user.
                </p>
                <p>
                    Please read the Terms of Use carefully before you start to use the Website.<strong> By using the
                    Website, you accept and agree to be bound and abide by these Terms of Use and our Privacy Policy,
                    incorporated herein by reference. </strong>If you do not want to agree to these Terms of Use or the
                    Privacy Policy, you must not access or use the Website.
                </p>
                <p>
                    This Website is offered and available to users who are 13 years of age or older. By using this
                    Website, you represent and warrant that you are of legal age to form a binding contract with the
                    Company and meet all of the foregoing eligibility requirements. If you do not meet all of these
                    requirements, you must not access or use the Website.
                </p>
                <p>
                    <strong>Changes to the Terms of Use</strong>
                </p>
                <p>
                    We may revise and update these Terms of Use from time to time in our sole discretion. All changes
                    are effective immediately when we post them, and apply to all access to and use of the Website
                    thereafter. However, any changes to the dispute resolution provisions set forth in Governing Law and
                    Jurisdiction will not apply to any disputes for which the parties have actual notice on or prior to
                    the date the change is posted on the Website.
                </p>
                <p>
                    Your continued use of the Website following the posting of revised Terms of Use means that you
                    accept and agree to the changes. You are expected to check this page each time you access this
                    Website so you are aware of any changes, as they are binding on you.
                </p>
                <p>
                    <strong>Accessing the Website and Account Security</strong>
                </p>
                <p>
                    We reserve the right to withdraw or amend this Website, and any service or material we provide on
                    the Website, in our sole discretion without notice. We will not be liable if for any reason all or
                    any part of the Website is unavailable at any time or for any period. From time to time, we may
                    restrict access to some parts of the Website, or the entire Website, to users, including registered
                    users.
                </p>
                <p>
                    You are responsible for both:
                </p>
                <ul>

                    <li>Making all arrangements necessary for you to have access to the Website.
                    </li>
                    <li>Ensuring that all persons who access the Website through your internet connection are aware
                        of these Terms of Use and comply with them.
                    </li>
                </ul>
                <p>
                    To access the Website or some of the resources it offers, you may be asked to provide certain
                    registration details or other information. It is a condition of your use of the Website that all the
                    information you provide on the Website is correct, current and complete. You agree that all
                    information you provide to register with this Website or otherwise, including, but not limited to,
                    through the use of any interactive features on the Website, is governed by our Privacy Policy and
                    you consent to all actions we take with respect to your information consistent with our Privacy
                    Policy.
                </p>
                <p>
                    If you choose, or are provided with, a user name, password or any other piece of information as part
                    of our security procedures, you must treat such information as confidential, and you must not
                    disclose it to any other person or entity. You also acknowledge that your account is personal to you
                    and agree not to provide any other person with access to this Website or portions of it using your
                    user name, password or other security information. You agree to notify us immediately of any
                    unauthorized access to or use of your user name or password or any other breach of security. You
                    also agree to ensure that you exit from your account at the end of each session. You should use
                    particular caution when accessing your account from a public or shared computer so that others are
                    not able to view or record your password or other personal information.
                </p>
                <p>
                    We have the right to disable any user name, password or other identifier, whether chosen by you or
                    provided by us, at any time in our sole discretion for any or no reason, including if, in our
                    opinion, you have violated any provision of these Terms of Use.
                </p>
                <p>
                    <strong>Intellectual Property Rights</strong>
                </p>
                <p>
                    The Website and its entire contents, features and functionality (including but not limited to all
                    information, software, text, displays, images, video and audio, and the design, selection and
                    arrangement thereof), are owned by the Company, its licensors or other providers of such material
                    and are protected by United States and international copyright, trademark, patent, trade secret and
                    other intellectual property or proprietary rights laws.
                </p>
                <p>
                    These Terms of Use permit you to use the Website for your personal, non-commercial use only. You
                    must not reproduce, distribute, modify, create derivative works of, publicly display, publicly
                    perform, republish, download, store or transmit any of the material on our Website, except as
                    follows:
                </p>
                <ul>

                    <li>Your computer may temporarily store copies of such materials in RAM incidental to your accessing
                        and viewing those materials.
                    </li>

                    <li>You may store files that are automatically cached by your Web browser for display
                        enhancement purposes.
                    </li>
                    <li>You may print or download one copy of a reasonable number of pages of the Website for
                        your own personal, non-commercial use and not for further reproduction, publication or
                        distribution.
                    </li>
                    <li>If we provide desktop, mobile or other applications for download, you may download a
                        single copy to your computer or mobile device solely for your own personal,
                        non-commercial use, provided you agree to be bound by our end user license agreement
                        for such applications.
                    </li>
                    <li>If we provide you and your username with certain content, you may take such
                        actions as are enabled by such features but limited by the Privacy Policy.
                    </li>
                </ul>
                <p>
                    You must not:
                </p>
                <ul>

                    <li>Modify copies of any materials from this site.
                    </li>
                    <li>Use any illustrations, photographs, video or audio sequences or any graphics separately from
                        the accompanying text.
                    </li>
                    <li>Delete or alter any copyright, trademark or other proprietary rights notices from copies
                        of materials from this site.
                    </li>
                </ul>
                <p>
                    You must not access or use for any commercial purposes any part of the Website or any services or
                    materials available through the Website.
                </p>
                <p>
                    If you wish to make any use of material on the Website other than that set out in this section,
                    please address your request to: support@thepicklemall.com.
                </p>
                <p>
                    If you print, copy, modify, download or otherwise use or provide any other person with access to any
                    part of the Website in breach of the Terms of Use, your right to use the Website will cease
                    immediately and you must, at our option, return or destroy any copies of the materials you have
                    made. No right, title or interest in or to the Website or any content on the Website is transferred
                    to you, and all rights not expressly granted are reserved by the Company. Any use of the Website not
                    expressly permitted by these Terms of Use is a breach of these Terms of Use and may violate
                    copyright, trademark and other laws.
                </p>
                <p>
                    <strong>Trademarks</strong>
                </p>
                <p>
                    The Company name, the Company logo and all related names, logos, product and service names, designs
                    and slogans are trademarks of the Company or its affiliates or licensors. You must not use such
                    marks without the prior written permission of the Company. All other names, logos, product and
                    service names, designs and slogans on this Website are the trademarks of their respective owners.
                </p>
                <p>
                    <strong>Prohibited Uses</strong>
                </p>
                <p>
                    You may use the Website only for lawful purposes and in accordance with these Terms of Use. You
                    agree not to use the Website:
                </p>
                <ul>

                    <li>In any way that violates any applicable federal, state, local or international law or regulation
                        (including, without limitation, any laws regarding the export of data or software to and from
                        the US or other countries).
                    </li>

                    <li>For the purpose of exploiting, harming or attempting to exploit or harm minors in any way by
                        exposing them to inappropriate content, asking for personally identifiable information or
                        otherwise.
                    </li>
                    <li>To send, knowingly receive, upload, download, use or re-use any material which does not
                        comply with the Content Standards set out in these Terms of Use.
                    </li>
                    <li>To transmit, or procure the sending of, any advertising or promotional material
                        without our prior written consent, including any "junk mail," "chain letter,"
                        "spam," or any other similar solicitation.
                    </li>
                    <li>To impersonate or attempt to impersonate the Company, a Company employee,
                        another user or any other person or entity (including, without limitation, by
                        using e-mail addresses or screen names associated with any of the foregoing).
                    </li>
                    <li>To engage in any other conduct that restricts or inhibits anyone's use or
                        enjoyment of the Website, or which, as determined by us, may harm the
                        Company or users of the Website, or expose them to liability.
                    </li>
                </ul>
                <p>
                    Additionally, you agree not to:
                </p>
                <ul>

                    <li>Use the Website in any manner that could disable, overburden, damage, or impair the site or
                        interfere with any other party's use of the Website, including their ability to engage in real
                        time activities through the Website.
                    </li>

                    <li>Use any robot, spider or other automatic device, automated tools or similar data gathering,
                        data harvesting, and extraction methods, directly or indirectly on the Website to collect
                        any information from the Website or any other user of the Website, including monitoring or
                        copying any of the material on the Website. Further, you may not use any such automated
                        means to manipulate the Website, such as automating what are otherwise manual or one-off
                        procedures. You may not take any action to interfere with, or disrupt, the Website, or any
                        other visitor’s use of the Website, including without limitation, via means of overloading,
                        “flooding”, “mail-bombing” or “crashing” the Website, circumventing security or user
                        authentication measures or attempting to exceed the limited authorization and access granted
                        to you by these Terms.
                    </li>
                    <li>Use any manual process to monitor, copy, or scrape any of the material on the Website,
                        or for any other purpose not expressly authorized in these Terms of Use, without our
                        prior written consent.
                    </li>
                    <li>Use any device, software or routine that interferes with the proper working of the
                        Website.
                    </li>
                    <li>Introduce any viruses, trojan horses, worms, logic bombs, spyware, adware or
                        other malicious computer code, file or program that is harmful, invasive, or is
                        otherwise intended to hijack the operation of, or monitor the use of, the
                        Website, or other material which is malicious or technologically harmful.
                    </li>
                    <li>Attempt to gain unauthorized access to, interfere with, damage or disrupt
                        any parts of the Website, the server on which the Website is stored, or any
                        server, computer or database connected to the Website.
                    </li>
                    <li>Attack the Website via a denial-of-service attack or a distributed
                        denial-of-service attack.
                    </li>
                    <li>Otherwise attempt to interfere with the proper working of the
                        Website.
                    </li>
                </ul>
                <p>
                    <strong>Security of the Website</strong>
                </p>
                <p>
                    You shall not violate or attempt to violate the security of the Website, including without
                    limitation, (a) accessing data not intended for visitors or logging into a server, (b) attempting to
                    probe, scan or test the vulnerability of a system or network or to breach security or authentication
                    measures or using any device, software, or routine to interfere with the proper working of the
                    Website; (c) attempting to interfere with the availability of the Website to any representative,
                    host or network, including without limitation, via means of submitting a virus to the site,
                    overloading, “flooding”, “mailbombing,” or “crashing” the Site. You further agree that you will not
                    take any action that imposes an unreasonable or disproportionately large load on the Website’s
                    infrastructure. Violations of system or network security may result in civil or criminal liability.
                    Violations of system or network security may result in criminal or civil liability. We will
                    investigate occurrences which may involve such violations and may involve, and cooperate with, law
                    enforcement authorities in identifying, investigating and/or prosecuting users who are involved in
                    such violations.
                </p>
                <p>
                    <strong>User Contributions</strong>
                </p>
                <p>
                    The Website may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin
                    boards, and other interactive features (collectively, "Interactive Services") that allow users to
                    post, submit, publish, display or transmit to other users or other persons (hereinafter, "post")
                    content or materials (collectively, "User Contributions") on or through the Website.
                </p>
                <p>
                    All User Contributions must comply with the Content Standards set out in these Terms of Use.
                </p>
                <p>
                    Any User Contribution you post to the site will be considered non-confidential and non-proprietary.
                    By providing any User Contribution on the Website, you grant us and our affiliates and service
                    providers, and each of their and our respective licensees, successors and assigns the right to use,
                    reproduce, modify, perform, display, distribute and otherwise disclose to third parties any such
                    material for any purpose.
                </p>
                <p>
                    You represent and warrant that:
                </p>
                <ul>

                    <li>You own or control all rights in and to the User Contributions and have the right to grant the
                        license granted above to us and our affiliates and service providers, and each of their and our
                        respective licensees, successors and assigns.
                    </li>
                    <li>All of your User Contributions do and will comply with these Terms of Use.
                    </li>
                </ul>
                <p>
                    You understand and acknowledge that you are responsible for any User Contributions you submit or
                    contribute, and you, not the Company, have fully responsibility for such content, including its
                    legality, reliability, accuracy and appropriateness.
                </p>
                <p>
                    We are not responsible, or liable to any third party, for the content or accuracy of any User
                    Contributions posted by you or any other user of the Website.
                </p>
                <p>
                    <strong>Monitoring and Enforcement; Termination</strong>
                </p>
                <p>
                    We have the right to:
                </p>
                <ul>

                    <li>Remove or refuse to post any User Contributions for any or no reason in our sole discretion.
                    </li>
                    <li>Take any action with respect to any User Contribution that we deem necessary or appropriate
                        in our sole discretion, including if we believe that such User Contribution violates the
                        Terms of Use, including the Content Standards, infringes any intellectual property right or
                        other right of any person or entity, threatens the personal safety of users of the Website
                        or the public or, in the opinion of the Company, could create liability for the Company.
                    </li>
                    <li>Disclose your identity or other information about you to any third party who claims that
                        material posted by you violates their rights, including their intellectual property
                        rights or their right to privacy.
                    </li>
                    <li>Take appropriate legal action, including without limitation, referral to law
                        enforcement, for any illegal or unauthorized use of the Website.
                    </li>
                    <li>Terminate or suspend your access to all or part of the Website for any or no
                        reason, including without limitation, any violation of these Terms of Use.
                    </li>
                </ul>
                <p>
                    Without limiting the foregoing, we have the right to fully cooperate with any law enforcement
                    authorities or court order requesting or directing us to disclose the identity or other information
                    of anyone posting any materials on or through the Website. YOU WAIVE AND HOLD HARMLESS THE COMPANY
                    AND ITS AFFILIATES, LICENSEES AND SERVICE PROVIDERS FROM ANY CLAIMS RESULTING FROM ANY ACTION TAKEN
                    BY ANY OF THE FOREGOING PARTIES DURING OR AS A RESULT OF ITS INVESTIGATIONS AND FROM ANY ACTIONS
                    TAKEN AS A CONSEQUENCE OF INVESTIGATIONS BY EITHER SUCH PARTIES OR LAW ENFORCEMENT AUTHORITIES.
                </p>
                <p>
                    However, we do not undertake to review material before it is posted on the Website, and cannot
                    ensure prompt removal of objectionable material after it has been posted. Accordingly, we assume no
                    liability for any action or inaction regarding transmissions, communications or content provided by
                    any user or third party. We have no liability or responsibility to anyone for performance or
                    nonperformance of the activities described in this section.
                </p>
                <p>
                    <strong>Content Standards</strong>
                </p>
                <p>
                    These content standards apply to any and all User Contributions and use of Interactive Services.
                    User Contributions must in their entirety comply with all applicable federal, state, local and
                    international laws and regulations. Without limiting the foregoing, User Contributions must not:
                </p>
                <ul>

                    <li>Contain any material which is defamatory, obscene, indecent, abusive, offensive, harassing,
                        violent, hateful, inflammatory or otherwise objectionable.
                    </li>
                    <li>Promote sexually explicit or pornographic material, violence, or discrimination based on
                        race, sex, religion, nationality, disability, sexual orientation or age.
                    </li>
                    <li>Infringe any patent, trademark, trade secret, copyright or other intellectual property
                        or other rights of any other person.
                    </li>
                    <li>Violate the legal rights (including the rights of publicity and privacy) of others
                        or contain any material that could give rise to any civil or criminal liability
                        under applicable laws or regulations or that otherwise may be in conflict with these
                        Terms of Use and our Privacy Policy.
                    </li>
                    <li>Be likely to deceive any person.
                    </li>
                    <li>Promote any illegal activity, or advocate, promote or assist any unlawful
                        act.
                    </li>
                    <li>Cause annoyance, inconvenience or needless anxiety or be likely to
                        upset, embarrass, alarm or annoy any other person.
                    </li>
                    <li>Impersonate any person, or misrepresent your identity or affiliation
                        with any person or organization.
                    </li>
                    <li>Involve commercial activities or sales, such as contests,
                        sweepstakes and other sales promotions, barter or advertising.
                    </li>
                    <li>Give the impression that they emanate from or are endorsed
                        by us or any other person or entity, if this is not the
                        case.
                    </li>
                </ul>
                <p>
                    <strong>Copyright Infringement</strong>
                </p>
                <p>
                    If you believe that any User Contributions violate your copyright, please send an email to
                    support@thepicklemall.com. for instructions on sending us a notice of copyright infringement. It is
                    the policy of the Company to terminate the user accounts of repeat infringers.
                </p>
                <p>
                    <strong>Reliance on Information Posted</strong>
                </p>
                <p>
                    The information presented on or through the Website is made available solely for general information
                    purposes. We do not warrant the accuracy, completeness or usefulness of this information. Any
                    reliance you place on such information is strictly at your own risk. We disclaim all liability and
                    responsibility arising from any reliance placed on such materials by you or any other visitor to the
                    Website, or by anyone who may be informed of any of its contents.
                </p>
                <p>
                    This Website may include content provided by third parties, including materials provided by other
                    users, bloggers and third-party licensors, syndicators, aggregators and/or reporting services. All
                    statements and/or opinions expressed in these materials, and all articles and responses to questions
                    and other content, other than the content provided by the Company, are solely the opinions and the
                    responsibility of the person or entity providing those materials. These materials do not necessarily
                    reflect the opinion of the Company. We are not responsible, or liable to you or any third party, for
                    the content or accuracy of any materials provided by any third parties.
                </p>
                <p>
                    <strong>Changes to the Website</strong>
                </p>
                <p>
                    We may update the content on this Website from time to time, but its content is not necessarily
                    complete or up-to-date. Any of the material on the Website may be out of date at any given time, and
                    we are under no obligation to update such material.
                </p>
                <p>
                    <strong>Information About You and Your Visits to the Website</strong>
                </p>
                <p>
                    All information we collect on this Website is subject to our Privacy Policy. By using the Website,
                    you consent to all actions taken by us with respect to your information in compliance with the
                    Privacy Policy.
                </p>
                <p>
                    <strong>Linking to the Website and Social Media Features</strong>
                </p>
                <p>
                    You may link to our homepage, provided you do so in a way that is fair and legal and does not damage
                    our reputation or take advantage of it, but you must not establish a link in such a way as to
                    suggest any form of association, approval or endorsement on our part
                </p>
                <p>
                    This Website may provide certain social media features that enable you to:
                </p>
                <ul>

                    <li>Link from your own or certain third-party websites to certain content on this Website.
                    </li>
                    <li>Send e-mails or other communications with certain content, or links to certain content, on
                        this Website.
                    </li>
                    <li>Cause limited portions of content on this Website to be displayed or appear to be
                        displayed on your own or certain third-party websites.
                    </li>
                </ul>
                <p>
                    You may use these features solely as they are provided by us and solely with respect to the content
                    they are displayed with. Subject to the foregoing, you must not:
                </p>
                <ul>

                    <li>Establish a link from any website that is not owned by you.
                    </li>
                    <li>Cause the Website or portions of it to be displayed, or appear to be displayed by, for
                        example, framing, deep linking or in-line linking, on any other site.
                    </li>
                    <li>Link to any part of the Website other than the homepage.
                    </li>
                    <li>Otherwise take any action with respect to the materials on this Website that is
                        inconsistent with any other provision of these Terms of Use.
                    </li>
                </ul>
                <p>
                    The website from which you are linking, or on which you make certain content accessible, must comply
                    in all respects with the Content Standards set out in these Terms of Use.
                </p>
                <p>
                    You agree to cooperate with us in causing any unauthorized framing or linking immediately to cease.
                    We reserve the right to withdraw linking permission without notice.
                </p>
                <p>
                    We may disable all or any social media features and any links at any time without notice in our
                    discretion.
                </p>
                <p>
                    <strong>Links from the Website</strong>
                </p>
                <p>
                    If the Website contains links to other sites and resources provided by third parties, these links
                    are provided for your convenience only. This includes links contained in advertisements, including
                    banner advertisements and sponsored links. We have no control over the contents of those sites or
                    resources, and accept no responsibility for them or for any loss or damage that may arise from your
                    use of them. If you decide to access any of the third party websites linked to this Website, you do
                    so entirely at your own risk and subject to the terms and conditions of use for such websites.
                </p>
                <p>
                    <strong>Geographic Restrictions</strong>
                </p>
                <p>
                    The owner of the Website is based in the State of Texas in the United States. We provide this
                    Website for use only by persons located in the United States. We make no claims that the Website or
                    any of its content is accessible or appropriate outside of the United States. Access to the Website
                    may not be legal by certain persons or in certain countries. If you access the Website from outside
                    the United States, you do so on your own initiative and are responsible for compliance with local
                    laws.
                </p>
                <p>
                    <strong>Disclaimer of Warranties</strong>
                </p>
                <p>
                    You understand that we cannot and do not guarantee or warrant that files available for downloading
                    from the internet or the Website will be free of viruses or other destructive code. You are
                    responsible for implementing sufficient procedures and checkpoints to satisfy your particular
                    requirements for anti-virus protection and accuracy of data input and output, and for maintaining a
                    means external to our site for any reconstruction of any lost data. WE WILL NOT BE LIABLE FOR ANY
                    LOSS OR DAMAGE CAUSED BY A DISTRIBUTED DENIAL-OF-SERVICE ATTACK, VIRUSES OR OTHER TECHNOLOGICALLY
                    HARMFUL MATERIAL THAT MAY INFECT YOUR COMPUTER EQUIPMENT, COMPUTER PROGRAMS, DATA OR OTHER
                    PROPRIETARY MATERIAL DUE TO YOUR USE OF THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
                    WEBSITE OR TO YOUR DOWNLOADING OF ANY MATERIAL POSTED ON IT, OR ON ANY WEBSITE LINKED TO IT.
                </p>
                <p>
                    YOUR USE OF THE WEBSITE, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE IS AT
                    YOUR OWN RISK. THE WEBSITE, ITS CONTENT AND ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE ARE
                    PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS
                    OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR
                    REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY OR
                    AVAILABILITY OF THE WEBSITE. WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE
                    ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE WEBSITE, ITS CONTENT OR ANY SERVICES OR
                    ITEMS OBTAINED THROUGH THE WEBSITE WILL BE ACCURATE, RELIABLE, ERROR-FREE OR UNINTERRUPTED, THAT
                    DEFECTS WILL BE CORRECTED, THAT OUR SITE OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES
                    OR OTHER HARMFUL COMPONENTS OR THAT THE WEBSITE OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE
                    WEBSITE WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
                </p>
                <p>
                    THE COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY OR
                    OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT AND
                    FITNESS FOR PARTICULAR PURPOSE.
                </p>
                <p>
                    THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE
                    LAW.
                </p>
                <p>
                    <strong>Limitation on Liability</strong>
                </p>
                <p>
                    TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES OR THEIR
                    LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY
                    KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE,
                    THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES OR ANY
                    SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT,
                    INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO,
                    PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF
                    BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY
                    TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.
                </p>
                <p>
                    THE FOREGOING DOES NOT AFFECT ANY LIABILITY WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE
                    LAW.
                </p>
                <p>
                    <strong>Indemnification</strong>
                </p>
                <p>
                    You agree to defend, indemnify and hold harmless the Company, its affiliates, licensors and service
                    providers, and its and their respective officers, directors, employees, contractors, agents,
                    licensors, suppliers, successors and assigns from and against any claims, liabilities, damages,
                    judgments, awards, losses, costs, expenses or fees (including reasonable attorneys' fees) arising
                    out of or relating to your violation of these Terms of Use or the Privacy Policy or your use of the
                    Website, including, but not limited to, your User Contributions, any use of the Website's content,
                    services and products other than as expressly authorized in these Terms of Use, or your use of any
                    information obtained from the Website.
                </p>
                <p>
                    <strong>Governing Law and Jurisdiction</strong>
                </p>
                <p>
                    All matters relating to the Website and these Terms of Use, and any dispute or claim arising
                    therefrom or related thereto (in each case, including non-contractual disputes or claims), shall be
                    governed by and construed in accordance with the internal laws of the State of Texas without giving
                    effect to any choice or conflict of law provision or rule (whether of the State of Texas or any
                    other jurisdiction).
                </p>
                <p>
                    Any legal suit, action or proceeding arising out of, or related to, these Terms of Use or the
                    Website shall be instituted exclusively in the federal courts of the United States or the courts of
                    the State of Texas, in each case located in the City of Austin and County of Travis, although we
                    retain the right to bring any suit, action or proceeding against you for breach of these Terms of
                    Use in your country of residence or any other relevant country. You waive any and all objections to
                    the exercise of jurisdiction over you by such courts and to venue in such courts.
                </p>
                <p>
                    <strong>Arbitration</strong>
                </p>
                <p>
                    At Company's sole discretion, it may require You to submit any disputes arising from these Terms of
                    Use or use of the Website, including disputes arising from or concerning their interpretation,
                    violation, invalidity, non-performance, or termination, to final and binding arbitration under the
                    Rules of Arbitration of the American Arbitration Association applying Texas law and taking place in
                    Austin, Texas.
                </p>
                <p>
                    <strong>Limitation on Time to File Claims</strong>
                </p>
                <p>
                    ANY CAUSE OF ACTION OR CLAIM YOU MAY HAVE ARISING OUT OF OR RELATING TO THESE TERMS OF USE OR THE
                    WEBSITE MUST BE COMMENCED WITHIN ONE (1) YEAR AFTER THE CAUSE OF ACTION ACCRUES; OTHERWISE, SUCH
                    CAUSE OF ACTION OR CLAIM IS PERMANENTLY BARRED.
                </p>
                <p>
                    <strong>Waiver and Severability</strong>
                </p>
                <p>
                    No waiver of by the Company of any term or condition set forth in these Terms of Use shall be deemed
                    a further or continuing waiver of such term or condition or a waiver of any other term or condition,
                    and any failure of the Company to assert a right or provision under these Terms of Use shall not
                    constitute a waiver of such right or provision.
                </p>
                <p>
                    If any provision of these Terms of Use is held by a court or other tribunal of competent
                    jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be
                    eliminated or limited to the minimum extent such that the remaining provisions of the Terms of Use
                    will continue in full force and effect.
                </p>
                <p>
                    <strong>Entire Agreement</strong>
                </p>
                <p>
                    The Terms of Use and our Privacy Policy constitute the sole and entire agreement between you and Us
                    with respect to the Website and supersede all prior and contemporaneous understandings, agreements,
                    representations and warranties, both written and oral, with respect to the Website.
                </p>
                <p>
                    <strong>Your Comments and Concerns</strong>
                </p>
                <p>
                    This website is operated by PickleMall.
                </p>
                <p>
                    All other feedback, comments, requests for technical support and other communications relating to
                    the Website should be directed to: support@thepicklemall.com.
                </p>
            </div>
        </div>
    )
}