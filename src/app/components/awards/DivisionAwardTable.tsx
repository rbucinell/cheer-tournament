"use client";
import {Component, ReactNode} from "react";
import {Table, TableBody, TableHead, TableRow, TableCell} from '@mui/material';
import {Medal, Crown} from 'lucide-react';
import {ITeam} from "@/app/models/team";
import _ from "lodash";
import React from "react";

const MedalColor = {
    Gold:   "#D6AF36",
    Silver: "#A7A7AD",
    Bronze: "#A77044"
}

interface DivisionAwardTableProps {
    division: string,
    teams: ITeam[]
}

export default class DivisionAwardTable extends Component<DivisionAwardTableProps, unknown> {

    division:string;
    teams:ITeam[];
    
    constructor(props: DivisionAwardTableProps) {
        super(props);
        this.division = props.division;
        this.teams = props.teams;
    }

    render(): ReactNode {
        const divisonalChamps =  _.maxBy( this.teams, function (t:ITeam){return _.sum(t.scores)});
        
        return <div id="flag-awards" className="border border-black rounded-lg overflow-y-scroll">
            <h3 className="text-center text-xl bg-purple-300">{this.division}</h3>
            <Table size="small" sx={{captionSide: 'top'}} className="border border-black bg-white rounded-lg caption-top">
                <TableHead className="bg-gray-300">
                    <TableRow>
                        <TableCell>Team</TableCell>
                        <TableCell>Score</TableCell>
                        <TableCell>Rank</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {_.map(_.groupBy(this.teams, 'group'), (teams, group) => {
                        
                        const groupScores = _.map(teams, 'scores').map( s => _.sum(s)).toSorted( (a,b) => b - a);
                        console.log( groupScores );
                        return <React.Fragment key={group}>
                            <TableRow>
                                <TableCell className="bg-purple-200"  align="center" colSpan={3}>{group}</TableCell>
                            </TableRow>
                            {teams.map(team => {
                                const total = _.sum(team.scores);
                                return <TableRow key={`${team.division}-${team.group}-${team.name}`}>
                                    <TableCell className="">{team.name}</TableCell>
                                    <TableCell className="">{total}</TableCell>
                                    <TableCell className="">
                                        { total == groupScores[0] ? <Medal color={MedalColor.Gold}/> : null }
                                        { total == groupScores[1] ? <Medal color={MedalColor.Silver}/> : null }
                                        { total == groupScores[2] ? <Medal color={MedalColor.Bronze}/> : null }                                        
                                    </TableCell>
                                </TableRow>
                            })}
                        </React.Fragment>
                    })}
                </TableBody>            
            </Table>
            <h5 className="border-t border-t-black text-center text-xl bg-purple-300">
                <small>Divisional Grand Champs</small>
                <div className="flex flex-row justify-center">
                    <span>{divisonalChamps?.name} [{ _.sum(divisonalChamps?.scores)}]</span> 
                    <Crown color={MedalColor.Gold}/> 
                </div>
            </h5>
        </div>
    }
}