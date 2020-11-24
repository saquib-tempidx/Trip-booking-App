import React from 'react'

export default function TripPackage() {
    return (
        <div>
            <h1>Packages Avialable</h1>
            <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Sl No.</th>
                <th scope="col">Package</th>
                <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Agra</td>
                    <td>20000</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Kerala</td>
                    <td>15000</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Coorg</td>
                    <td>12000</td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Mysore</td>
                    <td>15000</td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Goa</td>
                    <td>18000</td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>Kashmir</td>
                    <td>25000</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}
