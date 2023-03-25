import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.noteTitleHandler=this.noteTitleHandler.bind(this)
        this.inputColor=this.inputColor.bind(this)
        this.clearInput=this.clearInput.bind(this)
        this.addInput=this.addInput.bind(this)
        this.removenotes=this.removenotes.bind(this)

        this.state = {
            colors: [
                "#ECEFF1",
                "#FFAB91",
                "#FFE082",
                "#E6EE9C",
                "#81C784",
                "#80DEEA",
                "#7986CB",
                "#B39DDB",
                "#F48FB1",
                "#FFCDD2",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff'
        }
    }

    noteTitleHandler(event){
        this.setState({
            noteTitle:event.target.value
        })
    }

    inputColor(color){
        console.log(color);
        this.setState({
            inputColor:color
        })
    }

    clearInput(){
        this.setState({
            noteTitle:'',
            inputColor:'#fff'
        })
    }

    addInput(){

        let newInput={
            id:this.state.notes.length+1,
            title:this.state.noteTitle,
            color:this.state.inputColor
        }

        if(this.state.noteTitle.length){
            this.setState(prevState=>{
                return{
                    notes:[...prevState.notes,newInput] ,
                    noteTitle:'',
                    inputColor:'#fff'
                }
            })
        }  
    }

    removenotes(nodeid){
        console.log(nodeid);
        let removenotes=this.state.notes.filter(note=>{
            return note.id !== nodeid
        })
        this.setState({
            notes:removenotes
        })
    }



    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">React Example - Note App</div>

                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input id="input-field" className="form-control" type="text" style={{ backgroundColor: this.state.inputColor }} placeholder="افزودن یاداشت..." value={this.state.noteTitle} onChange={this.noteTitleHandler}/>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {this.state.colors.map(color=>(
                                                <ColorBox color={color} key={color}  inputColor={this.inputColor}/>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button id="btn-save" type="button" className="btn btn-outline-info"onClick={this.addInput}><span className="fa fa-plus" ></span></button>
                                        <button id="btn-delete" type="button" className="btn btn-outline-danger" onClick={this.clearInput}><span id="btn-icon"
                                            className="fa fa-eraser"></span></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">
                                            {this.state.notes.map(node=>(
                                                <Note {...node} removenotes={this.removenotes} />
                                            ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
