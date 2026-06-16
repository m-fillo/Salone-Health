/**
 * Salone Health Watch — Symptom Guide Logic
 * DLAW207 Group Project, Limkokwing University, Sierra Leone
 * License: MIT
 *
 * All processing happens client-side in the browser.
 * No data is sent to any server. No personal information is stored.
 */

/* =====================================================
   DOM REFERENCES
   ===================================================== */
const form     = document.getElementById('symptom-form');
const statusEl = document.getElementById('result-status');
const titleEl  = document.getElementById('result-title');
const listEl   = document.getElementById('result-list');

/* =====================================================
   GUIDANCE DATA
   Each key maps to a set of:
     status  — 'low' | 'mid' | 'high'  (drives colour coding)
     label   — short urgency phrase shown in the status badge
     title   — heading inside the result panel
     items   — array of plain-English guidance sentences
   ===================================================== */
const guidance = {

  none: {
    status: 'low',
    label:  'No symptoms selected',
    title:  'Select symptoms to see guidance',
    items:  ['Guidance will appear here based on what you select.']
  },

  mild: {
    status: 'low',
    label:  'General care advice',
    title:  'Mild signs noticed',
    items: [
      'Rest and drink plenty of clean, safe water.',
      'Monitor how you feel over the next 24 hours.',
      'If symptoms continue or worsen, visit your nearest health facility.'
    ]
  },

  fever: {
    status: 'mid',
    label:  'Possible malaria — seek testing',
    title:  'Fever-related symptoms detected',
    items: [
      'Fever with headache or body aches can be a sign of malaria, especially in the rainy season.',
      'Visit a health facility for a malaria test as soon as possible.',
      'Sleep under a treated mosquito net and continue taking fluids.'
    ]
  },

  dehydration: {
    status: 'high',
    label:  'Seek care urgently',
    title:  'Signs of dehydration detected',
    items: [
      'Watery diarrhoea, vomiting, and signs of dehydration can be serious, especially for children.',
      'Give oral rehydration solution (ORS) or clean fluids with salt and sugar if available.',
      'Go to the nearest health facility immediately — do not wait.'
    ]
  },

  breathing: {
    status: 'high',
    label:  'Seek care urgently',
    title:  'Breathing difficulty detected',
    items: [
      'Difficulty or fast breathing, especially with fever, needs urgent medical attention.',
      'Go to the nearest health facility or call for emergency transport now.'
    ]
  },

  pregnancy: {
    status: 'mid',
    label:  'Antenatal care advised',
    title:  'Pregnancy noted with other symptoms',
    items: [
      'Any of the symptoms above during pregnancy should be checked by a health worker without delay.',
      'Continue attending scheduled antenatal visits at your nearest PHU.',
      'Do not take any medication without guidance from a health worker.'
    ]
  },

  rash: {
    status: 'mid',
    label:  'Monitor and seek advice',
    title:  'Rash with fever noticed',
    items: [
      'A rash combined with fever can have several causes and should be checked by a health worker.',
      'Avoid sharing bedding or close contact until assessed, in case it is contagious.',
      'Visit your nearest health facility for an assessment.'
    ]
  }

};

/* =====================================================
   DECISION LOGIC
   Priority order (highest urgency wins):
     1. breathing  — always urgent
     2. dehydration
     3. pregnancy  — only escalate if other symptoms also present
     4. rash
     5. fever / headache
     6. mild (any other symptom)
     7. none (nothing selected)
   ===================================================== */
function getGuidanceKey(checkedValues) {
  if (checkedValues.length === 0)                                      return 'none';
  if (checkedValues.includes('breathing'))                              return 'breathing';
  if (checkedValues.includes('dehydration'))                            return 'dehydration';
  if (checkedValues.includes('pregnancy') && checkedValues.length > 1) return 'pregnancy';
  if (checkedValues.includes('rash'))                                   return 'rash';
  if (checkedValues.includes('fever') || checkedValues.includes('headache')) return 'fever';
  return 'mild';
}

/* =====================================================
   RENDER RESULT PANEL
   ===================================================== */
function renderResult(key) {
  const g = guidance[key];

  // Update status badge
  statusEl.textContent = g.label;
  statusEl.className   = 'result-status status-' + g.status;

  // Update heading
  titleEl.textContent = g.title;

  // Rebuild guidance list
  listEl.innerHTML = '';
  g.items.forEach(function(item) {
    const li = document.createElement('li');
    li.textContent = item;
    listEl.appendChild(li);
  });
}

/* =====================================================
   EVENT LISTENER — update on any checkbox change
   ===================================================== */
function update() {
  const checked = Array.from(
    form.querySelectorAll('input[type="checkbox"]:checked')
  ).map(function(input) { return input.value; });

  renderResult(getGuidanceKey(checked));
}

form.addEventListener('change', update);
