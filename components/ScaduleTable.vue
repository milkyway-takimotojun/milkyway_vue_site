<template>
    <div>
      <table class="table-kids">
        <tbody>
          <tr>
            <th scope="col">開校日</th>
            <td>毎月第2、第4日曜日</td>
          </tr>
          <tr>
            <th scope="col">開校時間</th>
            <td>10：15～11：45</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <style scoped>

  .table-kids {
    width: 100%;
    text-align: center;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 8px;
    overflow: hidden;
    background-color: #fad4df;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
  }
  
  .table-kids th,
  .table-kids td {
    padding: 16px;
    border: 1px solid #fc93b0;
    font-size: 18px;
    color: #333;
  }
  
  .table-kids th {
    background-color: #e25e84;
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }

  .table-kids td{
    color: #4b4949;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
  }
  
  .table-kids tr:nth-child(even) {
    background-color: #e2a9b9;
  }
  
  /* .table-kids tr:hover {
    background-color: #FFECB3;
  } */
  </style>
  