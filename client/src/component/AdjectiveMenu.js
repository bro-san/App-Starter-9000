import { Header, Menu, Icon, Button } from "semantic-ui-react";

function AdjectiveMenu({adjective, handleAdjClick, handleAdjUnclick}) {
    const terms = ["Stimulation", "Demonstration "]
    
    return (
        <><Menu fluid widths={4} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Stimulation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                             Stimulation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                {adjective === "Demonstration" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Demonstration
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Sophistication" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Sophistication
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Innovation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Innovation
                            </Header>
                        </Button>}
                </Menu.Item>
            </Menu>
            <Menu fluid widths={4} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Anticipation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Anticipation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Participation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Participation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Legalisation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Legalisation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Sensation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Sensation
                            </Header>
                        </Button>}
                </Menu.Item>
            </Menu>
            <Menu fluid widths={4} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Organisation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Organisation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Compensation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Compensation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Optimization" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Optimization
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Conversation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Conversation
                            </Header>
                        </Button>}
                </Menu.Item>
            </Menu>
            <Menu fluid widths={4} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Activation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Activation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Randomization" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Randomization
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Specialization" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Specialization
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Realisation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Realisation
                            </Header>
                        </Button>}
                </Menu.Item>
            </Menu>
            <Menu fluid widths={4} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Sychronization" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Sychronization
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Utilization
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Continuation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Continuation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Visualization" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Visualization
                            </Header>
                        </Button>}
                </Menu.Item>
            </Menu>
            <Menu fluid widths={4} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Evaluation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Evaluation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Fluctuation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Fluctuation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Equation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Equation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Graduation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Graduation
                            </Header>
                        </Button>}
                </Menu.Item>
            </Menu>
            <Menu fluid widths={4} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Situation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Situation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Infatuation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Infatuation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Revelation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Revelation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Relaxation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Relaxation
                            </Header>
                        </Button>}
                </Menu.Item>
            </Menu>
            <Menu fluid widths={4} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Recreation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Recreation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Delegation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Delegation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Instigation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Instigation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Investigation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Investigation
                            </Header>
                        </Button>}
                </Menu.Item>
            </Menu>
            <Menu fluid widths={4} class="ui two column grid">
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Mitigation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Mitigation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Navigation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Navigation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Obligation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Obligation
                            </Header>
                        </Button>}
                </Menu.Item>
                <Menu.Item textAlign="center" class="column">
                    {adjective === "Causation" ? 
                        <Button  color='white' onClick={handleAdjUnclick}>
                            <Header as='h2' color='blue'>
                            <Icon name="check square"/>
                            </Header>
                        </Button> : 
                        <Button  color='white' onClick={handleAdjClick}>
                            <Header as='h2' color='blue'>
                            Causation
                            </Header>
                        </Button>}
                </Menu.Item>
            </Menu>
            </>
    )}

    export default AdjectiveMenu
