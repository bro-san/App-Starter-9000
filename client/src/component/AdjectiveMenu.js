import { Header, Menu, Icon, Button } from "semantic-ui-react";

function AdjectiveMenu({adjective, handleAdjClick, handleAdjUnclick}) {
    const terms = ["Stimulation", "Demonstration", "Sophistication", "Innovation", "Anticipation", "Participation", "Legalisation", "Sensation", "Organisation", "Compensation", "Optimization", "Conversation", "Activation", "Randomization", "Specialization", "Realization", "Sychronization", "Utilization", "Continuation", "Visualization", "Evaluation", "Fluctuation", "Equation", "Graduation", "Situation", "Infatuation", "Revelation", "Relaxation", "Recreation", "Delegation", "Instigation", "Investigation", "Mitigation", "Navigation", "Obligation", "Causation", "Reincarnation", "Fascination", "Contemplation", "Cooperation", "Invitation", "Admiration", "Appreciation", "Jubilation", "Commemoration"]
    let termsPre1 = terms.filter(term => term != adjective)

    let term1 = terms[Math.floor(Math.random()*terms.length)]
    let termsPost1 = terms.filter(term => term != term1)

    let term2 = termsPost1[Math.floor(Math.random()*termsPost1.length)]
    let termsPost2 = termsPost1.filter(term => term != term2)

    let term3 = termsPost2[Math.floor(Math.random()*termsPost2.length)]
    let termsPost3 = termsPost2.filter(term => term != term3)

    let term4 = termsPost3[Math.floor(Math.random()*termsPost3.length)]
    let termsPost4 = termsPost3.filter(term => term != term4)

    let term5 = termsPost4[Math.floor(Math.random()*termsPost4.length)]
    let termsPost5 = termsPost4.filter(term => term != term5)

    let term6 = termsPost5[Math.floor(Math.random()*termsPost5.length)]
    let termsPost6 = termsPost5.filter(term => term != term6)

    let term7 = termsPost6[Math.floor(Math.random()*termsPost6.length)]
    let termsPost7 = termsPost6.filter(term => term != term7)

    let term8 = termsPost7[Math.floor(Math.random()*termsPost7.length)]
    let termsPost8 = termsPost7.filter(term => term != term8)

    let term9 = termsPost8[Math.floor(Math.random()*termsPost8.length)]

    
    return (
        <>
        <Menu fluid widths={3} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    {adjective === term1 ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                             {term1}
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                {adjective === term2 ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            {term2}
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === term3 ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            {term3}
                            </Header>
                        </Button>}
                </Menu.Item>
            </Menu>
            <Menu fluid widths={3} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    {adjective === term4 ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            {term4}
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === term5 ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            {term5}
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === term6 ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            {term6}
                            </Header>
                        </Button>}
                </Menu.Item>
            </Menu>
            <Menu fluid widths={3} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    {adjective === term7 ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            {term7}
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === term8 ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            {term8}
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === term9 ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            {term9}
                            </Header>
                        </Button>}
                </Menu.Item>
            </Menu>
            </>
    )}

    export default AdjectiveMenu
