// Resource Scheduling Logic
document.addEventListener('DOMContentLoaded', function() {
  // Initialize resources from mockData if not already set
  if (!localStorage.getItem('team')) {
    if (typeof mockData !== 'undefined' && mockData.team) {
      localStorage.setItem('team', JSON.stringify(mockData.team));
    }
  }
  if (!localStorage.getItem('meetings')) {
    if (typeof mockData !== 'undefined' && mockData.meetings) {
      localStorage.setItem('meetings', JSON.stringify(mockData.meetings));
    }
  }
  
  initializeCalendar();
  loadTeamAvailability();
  loadMeetings();
  setupResourceEventListeners();
});

function initializeCalendar() {
  const calendarGrid = document.querySelector('.calendar-grid');
  if (!calendarGrid) return;

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Update month header
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                     'July', 'August', 'September', 'October', 'November', 'December'];
  document.getElementById('currentMonth').textContent = `${monthNames[month]} ${year}`;

  // Clear existing days
  const existingDays = calendarGrid.querySelectorAll('.calendar-day:not(.header)');
  existingDays.forEach(day => day.remove());

  // Get first day of month and total days
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Add empty cells for days before first day of month
  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.className = 'calendar-day';
    calendarGrid.appendChild(emptyDay);
  }

  // Add days of the month
  for (let day = 1; day <= totalDays; day++) {
    const dayElement = document.createElement('div');
    dayElement.className = 'calendar-day';
    dayElement.textContent = day;

    // Highlight today
    const today = new Date();
    if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
      dayElement.classList.add('today');
    }

    // Add some sample events
    if ([5, 12, 18, 25].includes(day)) {
      dayElement.classList.add('has-events');
    }

    calendarGrid.appendChild(dayElement);
  }

  // Navigation
  document.getElementById('prevMonth').addEventListener('click', () => navigateMonth(-1));
  document.getElementById('nextMonth').addEventListener('click', () => navigateMonth(1));
}

function navigateMonth(direction) {
  // Simple navigation - in a real app, this would update the calendar properly
  const currentMonth = document.getElementById('currentMonth');
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                     'July', 'August', 'September', 'October', 'November', 'December'];
  const currentText = currentMonth.textContent;
  const [monthName, year] = currentText.split(' ');
  const currentMonthIndex = monthNames.indexOf(monthName);
  const newMonthIndex = (currentMonthIndex + direction + 12) % 12;
  const newYear = parseInt(year) + Math.floor((currentMonthIndex + direction) / 12);

  currentMonth.textContent = `${monthNames[newMonthIndex]} ${newYear}`;
}

function loadTeamAvailability() {
  const teamAvailability = document.getElementById('teamAvailability');
  if (!teamAvailability) return;

  const team = getTeamData();

  teamAvailability.innerHTML = '';

  team.forEach(member => {
    const memberDiv = document.createElement('div');
    memberDiv.className = 'team-member';
    memberDiv.innerHTML = `
      <img src="${member.avatar}" alt="${member.name}">
      <div>
        <strong>${member.name}</strong>
        <br>
        <small class="text-muted">${member.role}</small>
      </div>
      <div class="status ${member.availability}"></div>
    `;
    teamAvailability.appendChild(memberDiv);
  });
}

function loadMeetings() {
  const meetingsList = document.getElementById('meetingsList');
  if (!meetingsList) return;

  const meetings = getMeetingsData();

  meetingsList.innerHTML = '';

  meetings.forEach(meeting => {
    const meetingDiv = document.createElement('div');
    meetingDiv.className = 'meeting-item';
    meetingDiv.innerHTML = `
      <div>
        <strong>${meeting.title}</strong>
        <br>
        <small class="text-muted">${meeting.participants.join(', ')}</small>
      </div>
      <div class="time">${meeting.time}</div>
    `;
    meetingsList.appendChild(meetingDiv);
  });
}

function setupResourceEventListeners() {
  const scheduleMeetingBtn = document.getElementById('scheduleMeetingBtn');
  if (scheduleMeetingBtn) {
    scheduleMeetingBtn.addEventListener('click', function() {
      const title = prompt('Meeting title:');
      if (!title) return;

      const time = prompt('Time (e.g., 2:00 PM):');
      if (!time) return;

      const participants = prompt('Participants (comma-separated):');
      if (!participants) return;

      scheduleMeeting(title, time, participants.split(',').map(p => p.trim()));
    });
  }
}

function scheduleMeeting(title, time, participants) {
  const meetings = getMeetingsData();
  const newMeeting = {
    id: Date.now(),
    title,
    time,
    participants
  };

  meetings.push(newMeeting);
  localStorage.setItem('meetings', JSON.stringify(meetings));
  loadMeetings();
  AppUtils.showAlert('Meeting scheduled successfully!', 'success');
}

function getTeamData() {
  const stored = localStorage.getItem('team');
  if (stored) {
    return JSON.parse(stored);
  }

  return [
    {
      id: 1,
      name: 'Abnisha',
      role: 'Production Supervisor',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      availability: 'available'
    },
    {
      id: 2,
      name: 'Anki',
      role: 'Quality Control Lead',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      availability: 'busy'
    },
    {
      id: 3,
      name: 'Aadrika',
      role: 'Maintenance Manager',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      availability: 'available'
    },
    {
      id: 4,
      name: 'Taniya',
      role: 'Safety Coordinator',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      availability: 'offline'
    }
  ];
}

function getMeetingsData() {
  const stored = localStorage.getItem('meetings');
  if (stored) {
    return JSON.parse(stored);
  }

  return [
    {
      id: 1,
      title: 'Production Planning',
      time: '10:00 AM',
      participants: ['Abnisha', 'Anki']
    },
    {
      id: 2,
      title: 'Quality Review',
      time: '2:00 PM',
      participants: ['Anki', 'Aadrika']
    },
    {
      id: 3,
      title: 'Safety Training',
      time: '4:00 PM',
      participants: ['Taniya', 'All Staff']
    }
  ];
}