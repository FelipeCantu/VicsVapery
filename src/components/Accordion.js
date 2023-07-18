import React, { useState } from 'react'
import styled from 'styled-components'
import { FaFacebook } from 'react-icons/fa'

const socialMediaLinks = [
    {
        icon: <FaFacebook />,
        url: 'https://www.facebook.com'
    }
]

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null)
    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index)
    }

    return (
        <AccordionWrapper>
            {items.map((item, index) => (
                <AccordionItem key={index}>
                    <AccordionTitle onClick={() => handleClick(index)}>
                        {item.title}
                    </AccordionTitle>
                    <AccordionContent isOpen={index === activeIndex}>
                        {item.socialMediaLinks ? (
                            <div>
                                {socialMediaLinks.map((link, i) => (
                                    <socialMediaLinks
                                        key={i}
                                        href={link.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {link.icon}
                                    </socialMediaLinks>
                                ))}
                            </div>
                        ) : (
                            <div>
                                {item.links.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </AccordionWrapper>
    )
}

const AccordionWrapper = styled.div `
    width: 100%;
`

const AccordionItem = styled.div `
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
`

const AccordionTitle = styled.div`
    background-color: #f5f5f5;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
`

const AccordionContent = styled.div `
    padding: 10px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`
const Link = styled.a`
    color: #333;
    margin-right: 10px;
    font-size: 18px;
    transition: color 0.2;
    &:hover {
        color: #007bff;
    }
`

const SocialMediaLinks = styled(Link) `
    color: #333;
    font-size: 18px;
    margin-right: 10px;
    transition: color 0.2;
    &:hover {
        color: #007bff;
    }
`

export default Accordion

