const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// Students table
html = html.replace(
    /<button class="btn btn-warning" onclick="sendAbsenceSMS\(this\)"><i class="fab fa-whatsapp"><\/i> නොපැමිණි බව දැන්වීම<\/button>\s*<\/td>/g,
    '<button class="btn btn-warning" onclick="sendAbsenceSMS(this)"><i class="fab fa-whatsapp"></i> නොපැමිණි බව දැන්වීම</button>\n                                            <button class="btn btn-danger" onclick="removeRow(this)" title="මකන්න" style="padding: 0.6rem 0.8rem;"><i class="fas fa-trash"></i></button>\n                                        </td>'
);

// Teachers table 1
html = html.replace(
    /<button class="btn btn-warning"><i class="fas fa-sms"><\/i> නිවාඩු දැනුම්දීම \(දින 3\)<\/button>\s*<\/td>/g,
    '<button class="btn btn-warning"><i class="fas fa-sms"></i> නිවාඩු දැනුම්දීම (දින 3)</button>\n                                            <button class="btn btn-danger" onclick="removeRow(this)" title="මකන්න" style="padding: 0.6rem 0.8rem;"><i class="fas fa-trash"></i></button>\n                                        </td>'
);

// Teachers table 2
html = html.replace(
    /<td><button class="btn btn-warning"><i class="fas fa-sms"><\/i> නිවාඩු දැනුම්දීම<\/button><\/td>/g,
    '<td>\n                                            <button class="btn btn-warning"><i class="fas fa-sms"></i> නිවාඩු දැනුම්දීම</button>\n                                            <button class="btn btn-danger" onclick="removeRow(this)" title="මකන්න" style="padding: 0.6rem 0.8rem;"><i class="fas fa-trash"></i></button>\n                                        </td>'
);

// Prefects table
html = html.replace(
    /<th>පැමිණීම \(Attendance\)<\/th>/g,
    '<th>පැමිණීම (Attendance)</th>\n                                        <th>ක්‍රියාමාර්ග (Actions)</th>'
);
html = html.replace(
    /<td><input type="checkbox" class="attendance-check"><\/td>\s*<\/tr>/g,
    '<td><input type="checkbox" class="attendance-check"></td>\n                                        <td><button class="btn btn-danger" onclick="removeRow(this)" title="මකන්න" style="padding: 0.6rem 0.8rem;"><i class="fas fa-trash"></i></button></td>\n                                    </tr>'
);

// Interview board
html = html.replace(
    /<th>එකතුව \(100\)<\/th>/g,
    '<th>එකතුව (100)</th>\n                                        <th>ක්‍රියාමාර්ග (Actions)</th>'
);
html = html.replace(
    /<td class="total-marks"><span class="badge badge-success">0<\/span><\/td>\s*<\/tr>/g,
    '<td class="total-marks"><span class="badge badge-success">0</span></td>\n                                        <td><button class="btn btn-danger" onclick="removeRow(this)" title="මකන්න" style="padding: 0.6rem 0.8rem;"><i class="fas fa-trash"></i></button></td>\n                                    </tr>'
);

// Classes table
html = html.replace(
    /<th>තනතුර \(Role\/Position\)<\/th>/g,
    '<th>තනතුර (Role/Position)</th>\n                                        <th>ක්‍රියාමාර්ග (Actions)</th>'
);
html = html.replace(
    /<input type="text" class="table-input" placeholder="උදා: පන්ති නායක...">\s*<\/td>\s*<\/tr>/g,
    '<input type="text" class="table-input" placeholder="උදා: පන්ති නායක...">\n                                        </td>\n                                        <td><button class="btn btn-danger" onclick="removeRow(this)" title="මකන්න" style="padding: 0.6rem 0.8rem;"><i class="fas fa-trash"></i></button></td>\n                                    </tr>'
);
html = html.replace(
    /<input type="text" class="table-input" placeholder="උදා: ශිෂ්‍ය නායක...">\s*<\/td>\s*<\/tr>/g,
    '<input type="text" class="table-input" placeholder="උදා: ශිෂ්‍ය නායක...">\n                                        </td>\n                                        <td><button class="btn btn-danger" onclick="removeRow(this)" title="මකන්න" style="padding: 0.6rem 0.8rem;"><i class="fas fa-trash"></i></button></td>\n                                    </tr>'
);

fs.writeFileSync('index.html', html);
console.log("Done");
