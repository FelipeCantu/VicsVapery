import React, { useState } from 'react'
import styled from 'styled-components'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const socialMediaLinks = [
    {
        icon: <FaFacebook />,
        url: 'https://www.facebook.com'
    },
    {
        icon: <FaInstagram />,
        url: 'https://www.instagram.com/vicsvapery/?igshid=MmIzYWVlNDQ5Yg%3D%3D'
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
                        <Hero>
                            {item.content}
                        </Hero>
                    </AccordionTitle>
                    <AccordionContent isOpen={index === activeIndex}>
                        {item.socialMediaLinks ? (
                            <div>
                                {socialMediaLinks.map((link, i) => (
                                    <SocialMediaLinks
                                        key={i}
                                        href={link.url}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        {link.icon}
                                        
                                    </SocialMediaLinks>
                                ))}
                            </div>
                        ) : (
                                <div>
                                    <Links>
                                    {item.links.map((link, i) => (
                                        <Link
                                            key={i}
                                            href={link.url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                        >
                                            {link.label}
                                            {link.content}
                                        </Link>
                                    ))}
                                    </Links>
                                </div>
                        )}

                    </AccordionContent>
                </AccordionItem>
            ))}
        </AccordionWrapper>
    )
}

const AccordionWrapper = styled.div`
    width: 100%;
    background: #000;
    color: #fff;
`

const AccordionItem = styled.div`

`
const Hero = styled.div`
    padding-left: 15px;
`
const AccordionTitle = styled.div`
    background-color: #000;
    padding: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
`

const AccordionContent = styled.div`
    padding: 10px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`
const Links = styled.ul`
    height: 100%;
    display: grid;
    float: left;
    margin-left: 25px;
`

const Link = styled.a`
    color: #fff;
    font-size: 14px;
    margin-bottom: 5px;
    float: left;
    text-decoration: none;
    &:hover {
        color: #333;
    }
`

const SocialMediaLinks = styled(Link)`
    color: #fff;
    font-size: 30px;
    margin-right: 10px;
    transition: color 0.2;
    margin-left: 10px;
    &:hover {
        color: #333;
    }
`

export default Accordion

